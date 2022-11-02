import React, { useState, useContext } from 'react';
import { IsInEditModeContext } from "../context/IsInEditModeContext";
import {
    Row
} from '../styles/ExercisesCardStyles';

function Sets({
    set,
    onUpdateSet,
    exercise,
    setNewExercise,
    sets,
    submitNewSets
}) {

    const { isInEditMode } = useContext(IsInEditModeContext);

    const [updatedWeight, setUpdatedWeight] = useState(null)
    const [updatedReps, setUpdatedReps] = useState(null)
    const [selectedSet, setSelectedSet] = useState(null)
    const [newWeight, setNewWeight] = useState(null)
    const [newReps, setNewReps] = useState(null)

    if (!exercise) {
        return <div>Loading...</div>
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
        .then(res => res.json())
        .then(updatedSet => onUpdateSet(updatedSet))
    }

    const handleNewExerciseSets = (e) => {
        e.preventDefault();

        set.weight = newWeight
        set.reps = newReps

        sets.map(currentSet => currentSet.id === set.id ? set : currentSet)
        
        submitNewSets(sets)
    }

    const isValid = Boolean((updatedWeight && updatedReps) || (newWeight && newReps))

    if (!isInEditMode) {
        return (
            <div>
                <input
                    type="number"
                    placeholder={set.weight}
                    value={newWeight}
                    onChange={e => setNewWeight(e.target.value)}
                />
                <input
                    type="number"
                    placeholder={set.reps}
                    value={newReps}
                    onChange={e => setNewReps(e.target.value)}
                />
                <button onClick={handleNewExerciseSets} disabled={!isValid}>Done</button>
            </div>
        )
    }

    return (
        <Row>
            <form
                key={set.id}
                onSubmit={handleUpdatedSet}
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
                <button type="submit" disabled={!isValid}>Update Set</button>
            </form>
        </Row>
    )
}

export default Sets;