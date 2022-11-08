import React, { useEffect, useState, useContext } from 'react';
import ExerciseListCard from './ExerciseListCard';
import NewExercisesCard from './NewExercisesCard';
import { UserContext } from '../context/UserContext';
import { ExercisesContainer, Wrapper } from '../styles/ExercisesListStyles';

function ExercisesList() {
    const [exercises, setExercises] = useState(null)
    const [exercisesForNewRoutine, setExercisesForNewRoutine] = useState([])
    const [routineName, setRoutineName] = useState(null)
    const [newRoutine, setNewRoutine] = useState(null)

    const { user } = useContext(UserContext)

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
        .then(newRoutine => setNewRoutine(newRoutine))
    }

    const isValid = Boolean(routineName)

    return (
        <Wrapper>
            {newRoutine &&
                <ExercisesContainer>
                    {renderExercises}
                </ExercisesContainer>
            }
            <div>
                {!newRoutine &&
                    <form onSubmit={createNewRoutine}>
                        <label>What is the name of your routine?</label>
                        <input
                            value={routineName}
                            onChange={e => setRoutineName(e.target.value)}
                        />
                        <button type="submit" disabled={!isValid}>Submit</button>
                    </form>
                }
                {(exercisesForNewRoutine.length === 0 && newRoutine) && <div>Add exercises!</div>}
                {renderNewRoutine}
            </div>
        </Wrapper>
    )
}

export default ExercisesList;