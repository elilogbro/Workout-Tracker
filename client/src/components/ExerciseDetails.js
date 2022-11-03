import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SelectedExerciseContext } from '../context/SelectedExerciseContext';

function ExerciseDetails() {

    let history = useHistory();

    const { selectedExercise, updateSelectedExercise } = useContext(SelectedExerciseContext);

    if (!selectedExercise) {
        return <div>Loading...</div>
    }

    const pushToExercisesList = () => {
        history.push('/exercises')

        updateSelectedExercise(null)
    }

    return (
        <div>
            <button onClick={pushToExercisesList}>Back</button>
            <h2>{selectedExercise.name}</h2>
            <h4>Muscle Group: {selectedExercise.muscle_group}</h4>
            <img
                src={selectedExercise.image}
                alt={selectedExercise.name}
            />
        </div>
    )
}

export default ExerciseDetails;