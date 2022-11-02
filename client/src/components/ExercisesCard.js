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
    Row
} from '../styles/ExercisesCardStyles';

function ExercisesCard({exercise}) {

    const { isInEditMode } = useContext(IsInEditModeContext);
    const { routineExercises, updateRoutineExercises } = useContext(SelectedRoutineContext);
    const { selectedRoutine } = useContext(SelectedRoutineContext);
    const { user, updateRoutines, routines } = useContext(UserContext);

    const [sets, setSets] = useState(null)
    const [isNameClicked, setIsNameClicked] = useState(false)
    const [newName, setNewName] = useState(null)
    const [newSetsForExercise, setNewSetsForExercise] = useState([])

    useEffect(() => {
        fetch(`/exercises/${exercise.id}`)
        .then(res => res.json())
        .then(currentExercise => {
            setSets(currentExercise.workout_sets)
        })
    }, [exercise.id])

    if (!sets) {
        return <div>Loading...</div>
    }

    const onUpdateSet = (updatedExercise) => {
        const updatedExercises = sets.map(set => set.id === updatedExercise.id ? updatedExercise : set)

       setSets(updatedExercises)
    }

    const submitNewSets = (newSets) => {
        console.log(newSets)
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

    return (
        <ExercisesContainer>
            {isInEditMode ?
                isNameClicked ?
                // if both are truthy
                    <form onSubmit={submitNewName}>
                        <input
                            type="text"
                            placeholder={exercise.name}
                            value={newName}
                            onChange={e => setNewName(e.target.value)}
                        />
                        <button type="submit">Done</button>
                    </form> :
                    // if isInEditMode is truthy but isNameClicked is falsy
                        <div>
                            <h2>{exercise.name}</h2> 
                            <button onClick={switchNameDisplay}>Edit</button>
                        </div> :
                        // if isInEditMode is falsy
                            <h2>{exercise.name}</h2>
            }
            <Table>
                <HeadersContainer>
                    <Header left="true">Weight</Header>
                    <Header right="true">Reps</Header>
                </HeadersContainer>
                <Row>
                    <form>
                        {renderSets}
                        <button type="submit">Submit</button>
                    </form>
                </Row>
            </Table>
        </ExercisesContainer>
    )
}

export default ExercisesCard;