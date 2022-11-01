import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { SelectedRoutineContext } from "../context/SelectedRoutineContext";
import { IsInEditModeContext } from "../context/IsInEditModeContext";

function RoutineCard({routine}) {

    let history = useHistory();

    const { updateSelectedRoutine } = useContext(SelectedRoutineContext);

    const { updateIsInEditMode } = useContext(IsInEditModeContext);

    const pushToEditExercisesCard = (e) => {
        if (e.target.innerText === "Edit") {
            updateIsInEditMode(true)
        }
        else {
            updateIsInEditMode(false)
        }
        
        fetch(`/routines/${routine.id}`)
        .then(res => res.json())
        .then(routine => handleSelectedRoutine(routine))
        
        history.push(`/routines/${routine.id}`)
    }

    const handleSelectedRoutine = (routine) => {
        updateSelectedRoutine(routine)
    }

    return (
        <div>
            <p>{routine.name}</p>
            <button onClick={pushToEditExercisesCard}>Edit</button>
            <button onClick={pushToEditExercisesCard}>Repeat</button>
        </div>
    )
}

export default RoutineCard;