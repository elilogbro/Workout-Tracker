import React, { useState } from 'react';

function NewExercisesCard({exercise, deleteExerciseFromRoutine}) {
    let [count, setCount] = useState([])

    if (!exercise) {
        return <div>Loading...</div>
    }

    const addInput = () => {
        setCount([...count, 1])
    }

    const renderCount = count.length > 0 && count.map(x => <input />)

    return (
        <form>
            <h2>{exercise.name}</h2>
            <button onClick={addInput}>Add Set</button>
            {renderCount}
            <button onClick={() => deleteExerciseFromRoutine(exercise)}>Delete from Routine</button>
        </form>
    )
}

export default NewExercisesCard;