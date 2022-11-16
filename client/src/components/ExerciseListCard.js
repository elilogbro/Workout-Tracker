import React from 'react';
import {
    Card,
    P,
    Button
} from '../styles/ExerciseListCardStyles';

function ExerciseListCard({exercise, handleAddToNewRoutine}) {

    return (
        <Card>
            <P>{exercise.name}</P>
            <Button onClick={() => handleAddToNewRoutine(exercise)}>Add to Routine</Button>
        </Card>
    )
}

export default ExerciseListCard;