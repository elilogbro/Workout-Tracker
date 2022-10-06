import React from 'react';
import styled from 'styled-components';

function RoutineList({routine, setCurrentRoutine, handleDeletedRoutine, setRoutineExercises, setIsInEdit, userExercises, routineExercises}) {
    
    const setRoutine = () => {
        fetch(`/routines/${routine.id}`)
        .then(res => res.json())
        .then(currentRoutine =>  {
            setCurrentRoutine(currentRoutine)
            setRoutineExercises(currentRoutine.exercises)
        })

        setIsInEdit(false)
    }

    const setRoutineAndEdit = () => {
        fetch(`/routines/${routine.id}`)
        .then(res => res.json())
        .then(currentRoutine =>  {
            setCurrentRoutine(currentRoutine)
            setRoutineExercises(currentRoutine.exercises)
        })

        setIsInEdit(true)
    }

    const handleDelete = () => {
        fetch(`/routines/${routine.id}`, {
            method: 'DELETE'
        })
    
        handleDeletedRoutine(routine.id)
    }

    return (
        <Wrapper>
            <h3>{routine.name}</h3>
            <InnerWrapper>
                <button onClick={setRoutineAndEdit}>Edit</button>
                <button onClick={setRoutine}>Repeat</button>
                <button onClick={handleDelete}>Delete</button>
            </InnerWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid;
    text-align: center;
    padding: 10px;
    min-width: 300px;
`;

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export default RoutineList;