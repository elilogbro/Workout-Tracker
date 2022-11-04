import React, { useState } from 'react';

function NewExercisesCard({exercise, deleteExerciseFromRoutine}) {

    return (
        <form>
            <h2>{exercise.name}</h2>
            <button>Add Set</button>
            <button onClick={() => deleteExerciseFromRoutine(exercise)}>Delete from Routine</button>
        </form>
    )
}

export default NewExercisesCard;