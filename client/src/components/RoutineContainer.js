import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { SelectedRoutineContext } from "../context/SelectedRoutineContext";
import { IsInEditModeContext } from "../context/IsInEditModeContext";
import { UserContext } from '../context/UserContext';
import {
    Container,
    Button
} from '../styles/RoutineContainerStyles';

function RoutineCard({routine}) {

    let history = useHistory();

    const { updateSelectedRoutine } = useContext(SelectedRoutineContext);
    const { routines, updateRoutines } = useContext(UserContext);
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

    const handleDeleteRoutine = () => {
        fetch(`/routines/${routine.id}`, {
            method: "DELETE"
        })

        removeRoutineFromState(routine)
    }

    const removeRoutineFromState = (deletedRoutine) => {
        const remainingRoutines = routines.filter(routine => routine.id !== deletedRoutine.id)
        updateRoutines(remainingRoutines)
    }

    return (
        <Container>
            <h2>{routine.name}</h2>
            <p>{routine.formatted_created_at}</p>
            <Button onClick={pushToEditExercisesCard}>Edit</Button>
            <Button onClick={pushToEditExercisesCard}>Repeat</Button>
            <Button onClick={handleDeleteRoutine}>Delete</Button>
        </Container>
    )
}

export default RoutineCard;