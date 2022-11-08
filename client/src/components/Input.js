import React, { useState } from 'react';

function Input({handleDeletedSet, set}) {
    const [weight, setWeight] = useState(null);
    const [reps, setReps] = useState(null);
    const [isClicked, setIsClicked] = useState(false)

    const updateWeightAndReps = (e) => {
        e.preventDefault();

        setIsClicked(true)

        set.weight = weight;
        set.reps = reps;

        console.log(set)
    }

    const isValid = Boolean(weight && reps)

    return (
        <div>
            <input
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)}
            />
            <input
                type="number"
                value={reps}
                onChange={e => setReps(e.target.value)}
            />
            <button onClick={updateWeightAndReps} disabled={!isValid || isClicked}>{isClicked ? "Saved" : "Done"}</button>
            <button onClick={(e) => handleDeletedSet(set, e)}>Delete Set</button>
        </div>
    )
}

export default Input;