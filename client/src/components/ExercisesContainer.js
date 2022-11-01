import React, { useContext } from 'react';
import { SelectedRoutineContext } from '../context/SelectedRoutineContext';
import ExercisesCard from "./ExercisesCard";

function RoutineExercisesCard() {

    const { routineExercises } = useContext(SelectedRoutineContext);

    if (!routineExercises) {
        return <div>Loading...</div>
    }

    const renderRoutineExerciseNames = routineExercises.map(exercise =>
        <ExercisesCard
            exercise={exercise}
            key={exercise.id}
        />
    )
    
    return (
        <div>
            {renderRoutineExerciseNames}
        </div>
    )
}

export default RoutineExercisesCard;