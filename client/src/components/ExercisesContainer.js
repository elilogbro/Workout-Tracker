import React, { useContext, useState } from 'react';
import { SelectedRoutineContext } from '../context/SelectedRoutineContext';
import ExercisesCard from "./ExercisesCard";

function RoutineExercisesCard() {

    const { routineExercises } = useContext(SelectedRoutineContext);
    
    const [newRoutine, setNewRoutine] = useState(null)

    if (!routineExercises) {
        return <div>Loading...</div>
    }

    const renderRoutineExerciseNames = routineExercises.map(exercise =>
        <ExercisesCard
            exercise={exercise}
            key={exercise.id}
            newRoutine={newRoutine}
            setNewRoutine={setNewRoutine}
        />
    )

    return (
        <div>
            {renderRoutineExerciseNames}
        </div>
    )
}

export default RoutineExercisesCard;