import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Card, P } from '../styles/ExerciseListCardStyles';
import { SelectedExerciseContext } from '../context/SelectedExerciseContext';

function ExerciseListCard({exercise, handleAddToNewRoutine}) {

    let history = useHistory();

    const { updateSelectedExercise } = useContext(SelectedExerciseContext);

    const showExerciseDetails = () => {
        updateSelectedExercise(exercise)

        history.push(`/exercise/${exercise.id}`)
    }

    return (
        <Card>
            <P onClick={showExerciseDetails}>{exercise.name}</P>
            <button onClick={() => handleAddToNewRoutine(exercise)}>Add to Routine</button>
        </Card>
    )
}

export default ExerciseListCard;