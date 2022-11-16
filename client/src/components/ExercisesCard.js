import React, { useState, useEffect, useContext } from 'react';
import Sets from './Sets';
import { IsInEditModeContext } from "../context/IsInEditModeContext";
import { SelectedRoutineContext } from "../context/SelectedRoutineContext";
import { UserContext } from '../context/UserContext';
import {
    ExercisesContainer,
    Table,
    HeadersContainer,
    Header,
    Row,
    Form,
    Button,
    NameContainer,
    SecondaryButton,
    Input
} from '../styles/ExercisesCardStyles';
import ClockLoader from 'react-spinners/ClockLoader';

function ExercisesCard({exercise, newRoutine, setNewRoutine}) {

    const { isInEditMode } = useContext(IsInEditModeContext);
    const { routineExercises, updateRoutineExercises } = useContext(SelectedRoutineContext);
    const { selectedRoutine } = useContext(SelectedRoutineContext);
    const { user, updateRoutines, routines } = useContext(UserContext);

    const [sets, setSets] = useState(null)
    const [isNameClicked, setIsNameClicked] = useState(false)
    const [newName, setNewName] = useState(null)
    const [newSetsForExercise, setNewSetsForExercise] = useState(null)
    const [fetchedExercise, setFetchedExercise] = useState(null)
    const [newExercise, setNewExercise] = useState(null)

    useEffect(() => {
        fetch(`/exercises/${exercise.id}`)
        .then(res => res.json())
        .then(currentExercise => {
            setSets(currentExercise.ordered_workout_sets)
        })
    }, [exercise.id])

    if (!sets) {
        return <ClockLoader color="#1de9b6" />
    }

    const onUpdateSet = (updatedExerciseSets) => {
        const updatedExercisesSets = sets.map(set => set.id === updatedExerciseSets.id ? updatedExerciseSets : set)

       setSets(updatedExercisesSets)
    }

    const submitNewSets = (newSets) => {
        setNewSetsForExercise(newSets)
    }

    const renderSets = sets.map(set => 
        <Sets
            set={set}
            key={set.id}
            onUpdateSet={onUpdateSet}
            exercise={exercise}
            setNewSetsForExercise={setNewSetsForExercise}
            newSetsForExercise={newSetsForExercise}
            sets={sets}
            setSets={setSets}
            submitNewSets={submitNewSets}
        />
    )

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newRoutine) {
            // fetch exercises/newSetsForExercise[newSetsForExercise.length - 1].id
            fetch(`/exercises/${newSetsForExercise[0].exercise_id}`)
            // set response to fetchedExercise
            .then(res => res.json())
            .then(fetchedExercise => {
                setFetchedExercise(fetchedExercise)
                // post /exercises
                fetch('/exercises', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    // set routine_id to newRoutine.id
                    // set image and name to fetchedExercise.image and fetchedExercise.name
                    body: JSON.stringify({
                        image: fetchedExercise.image,
                        name: fetchedExercise.name,
                        muscle_group: fetchedExercise.muscle_group,     
                        routine_id: newRoutine.id
                    })
                })
                // set response to newExercise
                .then(res => res.json())
                .then(newExercise => {
                    setNewExercise(newExercise)
                    // post newSetsForExercise.forEach(set => ) /workout_sets
                    newSetsForExercise.forEach(set => {
                        fetch('/workout_sets', {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            // set exercise_id to newExercise.id
                            // set weight to set.weight and reps to set.reps
                            body: JSON.stringify({
                                exercise_id: newExercise.id,
                                weight: set.weight,
                                reps: set.reps
                            })
                        })
                        .then(res => res.json())
                        // console log created set
                        .then(newSet => console.log(newSet))
                    })
                })
            })
        }
    }

    const switchNameDisplay = () => {
        setIsNameClicked(!isNameClicked)
    }

    const submitNewName = (e) => {
        e.preventDefault();

        fetch(`/exercises/${exercise.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: newName})
        })
        .then(res => res.json())
        .then(updatedExercise => handleUpdatedExercise(updatedExercise))

        setNewName(null)
        
        switchNameDisplay()
    }

    const handleUpdatedExercise = (updatedExercise) => {
        const updatedExercises = routineExercises.map(exercise => exercise.id === updatedExercise.id ? updatedExercise : exercise)

       updateRoutineExercises(updatedExercises)
    }
    
    const handleClick = (e) => {
        if (!isInEditMode && !newRoutine) {
            fetch('/routines', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name: selectedRoutine.name, user_id: user.id})
            })
            .then(res => res.json())
            .then(newRoutine => {
                setNewRoutine(newRoutine)
                updateRoutines([newRoutine, ...routines])
            })
        }
        handleSubmit(e);
    }

    const isValid = Boolean(newSetsForExercise)

    return (
        <ExercisesContainer>
            {isInEditMode ?
                isNameClicked ?
                // if both are truthy
                    <Form onSubmit={submitNewName}>
                        <Input
                            type="text"
                            placeholder={exercise.name}
                            value={newName}
                            onChange={e => setNewName(e.target.value)}
                        />
                        <SecondaryButton type="submit">Done</SecondaryButton>
                    </Form> :
                    // if isInEditMode is truthy but isNameClicked is falsy
                        <NameContainer>
                            <h2>{exercise.name}</h2> 
                            <SecondaryButton onClick={switchNameDisplay}>Edit Name</SecondaryButton>
                        </NameContainer> :
                        // if isInEditMode is falsy
                            <h2>{exercise.name}</h2>
            }
            <Table>
                <HeadersContainer>
                    <Header left="true">Weight</Header>
                    <Header right="true">Reps</Header>
                </HeadersContainer>
                <Row>
                    <Form onSubmit={handleSubmit}>
                        {renderSets}
                        {!isInEditMode && <Button type="submit" onClick={e => handleClick(e)} disabled={!isValid}>{!newExercise ? "Submit" : "Submitted"}</Button>}
                    </Form>
                </Row>
            </Table>
        </ExercisesContainer>
    )
}

export default ExercisesCard;