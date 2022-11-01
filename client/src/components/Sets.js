import React, { useState } from 'react';
import {
    Row
} from '../styles/ExercisesCardStyles';

function Sets({set, onUpdateSet, setErrors}) {

    const [updatedWeight, setUpdatedWeight] = useState(null)
    const [updatedReps, setUpdatedReps] = useState(null)
    const [selectedSet, setSelectedSet] = useState(null)
    const [showButton, setShowButton] = useState(false)

    const handleShowButton = () => {
        setShowButton(true)
    }

    const handleUpdatedSet = (e) => {
        e.preventDefault();
        
        fetch(`/workout_sets/${selectedSet.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({weight: updatedWeight, reps: updatedReps})
        })
        .then(res => {
            if (res.ok) {
                res.json().then(updatedSet => {
                    onUpdateSet(updatedSet)
                })
                setShowButton(false)
            }
            else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }

    const isValid = Boolean(updatedWeight && updatedReps)

    return (
        <Row>
            <form
                key={set.id}
                onSubmit={handleUpdatedSet}
                onClick={handleShowButton}
            >
                <input
                    type="number"
                    placeholder={set.weight}
                    value={updatedWeight}
                    onClick={() => setSelectedSet(set)}
                    onChange={e => setUpdatedWeight(e.target.value)}
                />
                <input
                    type="number"
                    placeholder={set.reps}
                    value={updatedReps}
                    onClick={() => setSelectedSet(set)}
                    onChange={e => setUpdatedReps(e.target.value)}
                />
                {showButton &&
                    <button type="submit" disabled={!isValid}>Update Set</button>
                }
            </form>
        </Row>
    )
}

export default Sets;