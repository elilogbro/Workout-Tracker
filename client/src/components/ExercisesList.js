import React, { useEffect, useState } from 'react';
import ExerciseListCard from './ExerciseListCard';
import NewExercisesCard from './NewExercisesCard';
import { ExercisesContainer, Wrapper } from '../styles/ExercisesListStyles';

function ExercisesList() {
    const [exercises, setExercises] = useState(null)
    const [exercisesForNewRoutine, setExercisesForNewRoutine] = useState([])

    useEffect(() => {
        fetch('/exercises')
        .then(res => res.json())
        .then(exercises => setExercises(exercises))
    }, [])

    if (!exercises) {
        return <div>Loading...</div>
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
        />
    )

    const renderExercises = exercises.map(exercise =>
        <ExerciseListCard
            exercise={exercise}
            key={exercise.id}
            handleAddToNewRoutine={handleAddToNewRoutine}
        />
    )

    return (
        <Wrapper>
            <ExercisesContainer>
                {renderExercises}
            </ExercisesContainer>
            <div>
                <h2>Current Routine</h2>
                {exercisesForNewRoutine.length === 0 && <div>Add exercises!</div>}
                {renderNewRoutine}
            </div>
        </Wrapper>
    )
}

export default ExercisesList;