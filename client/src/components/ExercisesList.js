import React, { useEffect, useState } from 'react';
import ExerciseListCard from './ExerciseListCard';
import { ExercisesContainer, Wrapper } from '../styles/ExercisesListStyles';

function ExercisesList() {
    const [exercises, setExercises] = useState(null)

    useEffect(() => {
        fetch('/exercises')
        .then(res => res.json())
        .then(exercises => setExercises(exercises))
    }, [])

    if (!exercises) {
        return <div>Loading...</div>
    }

    const renderExercises = exercises.map(exercise =>
        <ExerciseListCard
            exercise={exercise}
            key={exercise.id}
        />
    )

    return (
        <Wrapper>
            <ExercisesContainer>
                {renderExercises}
            </ExercisesContainer>
            <div>
                <h2>Current Routine</h2>
            </div>
        </Wrapper>
    )
}

export default ExercisesList;