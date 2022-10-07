import React, { useEffect } from 'react';
import SetCard from './SetCard'
import styled from 'styled-components'

function RoutineExerciseCard({exercise, exerciseSets, setExerciseSets, currentRoutine, isInEdit, user, userSets, currentExercise, setCurrentExercise, reps, setReps, weight, setWeight, routineSets, setRoutineSets}) {

    const handleUpdatedSet = (updatedSet) => {
       const updateSets = exerciseSets.map(set => set.id === updatedSet.id ? updatedSet : set)

        setExerciseSets(updateSets)
    }

    const handleNewSet = (newSet) => {
        setExerciseSets([...exerciseSets, newSet])
    }


    const handleOnClick = () => {
        fetch('/exercise_sets', {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({routine_id: currentRoutine.id, user_id: user.id, weight: 0, reps: 0, exercise_id: currentExercise.id})
        })
        .then(res => res.json())
        .then(newSet => handleNewSet(newSet))
    }

 
    useEffect(() => {
        fetch(`/exercises/${exercise.id}`)
        .then(res => res.json())
        .then(currentExercise => {
            setCurrentExercise(currentExercise)
            setExerciseSets(routineSets.filter(set => set.exercise_id === currentExercise.id))
        })
    }, [exercise.id, routineSets, setCurrentExercise, setExerciseSets])

    if (!currentExercise || !exerciseSets) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <Wrapper>
                <p>{exercise.name}</p>
                {!isInEdit && <button onClick={handleOnClick}>Add set</button>}

                    {currentExercise && exerciseSets.map(set => (
                    <SetCard
                        set={set}
                        key={set.id}
                        handleUpdatedSet={handleUpdatedSet}
                        isInEdit={isInEdit}
                        currentRoutine={currentRoutine}
                        user={user}
                        weight={weight}
                        reps={reps}
                        setWeight={setWeight}
                        setReps={setReps}
                        />))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid;
`;

export default RoutineExerciseCard;