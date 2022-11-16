import React, { useEffect, useState, useContext } from 'react';
import ExerciseListCard from './ExerciseListCard';
import NewExercisesCard from './NewExercisesCard';
import { UserContext } from '../context/UserContext';
import {
    ExercisesContainer,
    Wrapper,
    Input,
    Form,
    Label,
    Button,
    NewExercisesContainer,
    Header,
    CreateRoutineContainer
} from '../styles/ExercisesListStyles';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ClockLoader from 'react-spinners/ClockLoader';

function ExercisesList() {
    const [exercises, setExercises] = useState(null)
    const [exercisesForNewRoutine, setExercisesForNewRoutine] = useState([])
    const [routineName, setRoutineName] = useState(null)
    const [newRoutine, setNewRoutine] = useState(null)

    const { user, updateRoutines, routines } = useContext(UserContext)

    useEffect(() => {
        fetch('/exercises')
        .then(res => res.json())
        .then(exercises => setExercises(exercises))
    }, [])

    if (!exercises) {
        return <ClockLoader color="#1de9b6"/>
    }

    const handleAddToNewRoutine = (exercise) => {
        setExercisesForNewRoutine([...exercisesForNewRoutine, exercise])
    }

    const deleteExerciseFromRoutine = (currentExercise) => {
        const remainingExercises = exercisesForNewRoutine.filter(exercise => exercise.id !== currentExercise.id)
        setExercisesForNewRoutine(remainingExercises)
    }

    const renderNewRoutine = exercisesForNewRoutine.length > 0 && exercisesForNewRoutine.map(exercise =>
        <NewExercisesCard
            key={exercise.id}
            exercise={exercise}
            deleteExerciseFromRoutine={deleteExerciseFromRoutine}
            newRoutine={newRoutine}
        />
    )

    const renderExercises = exercises.map(exercise =>
        <ExerciseListCard
            exercise={exercise}
            key={exercise.id}
            handleAddToNewRoutine={handleAddToNewRoutine}
        />
    )

    const createNewRoutine = (e) => {
        e.preventDefault();

        fetch('/routines', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: routineName,
                user_id: user.id
            })
        })
        .then(res => res.json())
        .then(newRoutine => {
            setNewRoutine(newRoutine)
            updateRoutines([newRoutine, ...routines])
        })
    }

    const isValid = Boolean(routineName)

    return (
        <div>
            <CreateRoutineContainer>
                {!newRoutine &&
                    <Form onSubmit={createNewRoutine}>
                        <Label>What is the name of your new routine?</Label>
                        <div>
                            <Input
                                value={routineName}
                                onChange={e => setRoutineName(e.target.value)}
                            />
                            <Button type="submit" disabled={!isValid}><AiOutlineArrowRight /></Button>
                        </div>
                    </Form>
                }
            </CreateRoutineContainer>
            <Wrapper>
                {newRoutine &&
                    <ExercisesContainer>
                        {renderExercises}
                    </ExercisesContainer>
                }
                    <NewExercisesContainer>
                        {newRoutine && <Header>{newRoutine.name}</Header>}
                        {renderNewRoutine}
                    </NewExercisesContainer>
            </Wrapper>
        </div>
    )
}

export default ExercisesList;