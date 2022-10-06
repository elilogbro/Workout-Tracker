import React from 'react';
import styled from 'styled-components';

function SetCard({set, handleUpdatedSet, isInEdit, currentRoutine, user, reps, setReps, weight, setWeight}) {

    const updateWeight = (e) => {
        e.preventDefault();

        fetch(`/exercise_sets/${set.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({weight: weight})
        })
        .then(res => res.json())
        .then(updatedSet => handleUpdatedSet(updatedSet))
    
        setWeight("")
    }

    const updateReps = (e) => {
        e.preventDefault();

        fetch(`/exercise_sets/${set.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({reps: reps})
        })
        .then(res => res.json())
        .then(updatedSet => handleUpdatedSet(updatedSet))
    
        setReps("")
    }


    return (
        <Wrapper>
            {isInEdit ?
            <>
                <form onSubmit={updateWeight}>
                    <Input type="text" name="weight" placeholder={set.weight} value={weight} onChange={e => setWeight(e.target.value)}/>
                </form>
                <form onSubmit={updateReps}>
                    <Input type="text" name="reps" placeholder={set.reps} value={reps} onChange={e => setReps(e.target.value)}/>
                </form>    
            </>
            :
            <>
                <form>
                    <Input type="text" name="weight" placeholder={set.weight} value={weight} onChange={e => setWeight(e.target.value)}/>
                </form>
                <form>    
                    <Input type="text" name="reps" placeholder={set.reps} value={reps} onChange={e => setReps(e.target.value)}/>
                </form>    
            </>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px;
`;

const Input = styled.input`
    width: 26px;
`;

export default SetCard;