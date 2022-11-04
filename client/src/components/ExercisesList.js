import React, { useEffect, useState } from 'react';
import ExerciseListCard from './ExerciseListCard';

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

    const renderNewRoutine = exercisesForNewRoutine.length > 0 && exercisesForNewRoutine.map(exercise =>
        <ExercisesCard key={exercise.id} exercise={exercise} />
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