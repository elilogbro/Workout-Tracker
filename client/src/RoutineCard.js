import React, { useState } from 'react';
import RoutineExerciseCard from './RoutineExerciseCard';
import styled from 'styled-components'


function RoutineCard({setCurrentRoutine, routineExercises, currentRoutine, handleUpdatedName, isInEdit, user, userSets, setUserSets, userExercises, userRoutines, setUserRoutines, setUserExercises, routineSets, setRoutineSets}) {

    const [routineName, setRoutineName] = useState("")
    const [exerciseSets, setExerciseSets] = useState(null)
    const [currentExercise, setCurrentExercise] = useState(null)
    const [reps, setReps] = useState("")
    const [weight, setWeight] = useState("")

    const renderExercises = routineExercises.map(exercise => (

            <RoutineExerciseCard
                key={exercise.id}
                exercise={exercise}
                currentRoutine={currentRoutine}
                exerciseSets={exerciseSets}
                setExerciseSets={setExerciseSets}
                user={user}
                isInEdit={isInEdit}
                userSets={userSets}
                setUserSets={setUserSets}
                currentExercise={currentExercise}
                setCurrentExercise={setCurrentExercise}
                reps={reps}
                setReps={setReps}
                weight={weight}
                setWeight={setWeight}
                routineSets={routineSets}
                setRoutineSets={setRoutineSets}
                />
    )) 

    const previousPage = () => {
        setCurrentRoutine(null)
    }

    const changeRoutineName = (e) => {
        e.preventDefault();

        fetch(`/routines/${currentRoutine.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: routineName})
        })
        .then(res => res.json())
        .then(updatedRoutine => handleUpdatedName(updatedRoutine))
    
        setRoutineName("")
    }

    const submitNewRoutine = () => {
        fetch('/routines', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: currentRoutine.name, user_id: user.id})
        })
        .then(res => res.json())
        .then(newRoutine => {
            setUserRoutines([...userRoutines, newRoutine])
            exerciseSets.forEach(
                fetch('/exercise_sets', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({routine_id: newRoutine.id, exercise_id: currentExercise.id, reps: reps, weight: weight, user_id: user.id})
            }))
            .then(res => res.json())
            .then(data => console.log(data))

        })
    }

    return (
        <div>
             {console.log(currentRoutine)}
            <Button onClick={previousPage}>Back</Button>
            { isInEdit ?
                
                <form onSubmit={changeRoutineName}>
                    <Input type="text" name="routineName" placeholder={currentRoutine.name} value={routineName} onChange={e => setRoutineName(e.target.value)}/>
                </form>
                    :
                        <>
                            <P>{currentRoutine.name}</P>
                        </>
            }
            <Wrapper>
                {renderExercises}
                {!isInEdit && <Button onClick={submitNewRoutine}>Submit Workout</Button>}
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid;
    text-align: center;
    min-width: 300px;
`;

const Button = styled.button`
    font-size: 18px;
    width: fit-content;
    align-self: center;
    margin-top: 1em;
    cursor: pointer;
    margin-bottom: 6px;
`;

const Input = styled.input`
    width: fit-content;
    text-align: center;
    margin: 1em;
    font-size: 26px;
    font-weight: bold;
    border: none;
`;

const P = styled.p`
    display: flex;
    margin: 1em;
    font-size: 26px;
    font-weight: bold;
    justify-content: center;
`;

export default RoutineCard;