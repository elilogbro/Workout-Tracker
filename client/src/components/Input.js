import React, { useState } from 'react';
import {
    Field,
    Button,
} from '../styles/InputStyles';

function Input({handleDeletedSet, set}) {
    const [weight, setWeight] = useState(null);
    const [reps, setReps] = useState(null);
    const [isClicked, setIsClicked] = useState(false)

    const updateWeightAndReps = (e) => {
        e.preventDefault();

        setIsClicked(true)

        set.weight = weight;
        set.reps = reps;
    }

    const isValid = Boolean(weight && reps)

    return (
        <div>
            <Field
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)}
            />
            <Field
                type="number"
                value={reps}
                onChange={e => setReps(e.target.value)}
            />
            <Button
                onClick={updateWeightAndReps}
                disabled={!isValid || isClicked}
            >
                {isClicked ? "Saved" : "Done"}
            </Button>
            <Button red="true" onClick={(e) => handleDeletedSet(set, e)}>Remove</Button>
        </div>
    )
}

export default Input;