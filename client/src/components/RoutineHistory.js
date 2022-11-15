import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import RoutineContainer from './RoutineContainer';
import {
    Container
} from '../styles/RoutineHistoryStyles';

function RoutineHistory() {

    const { routines } = useContext(UserContext);

    if (!routines) {
        return (
            <div>Loading...</div>
        )
    }
    
    const renderRoutines = routines.map(routine =>
        <RoutineContainer
            key={routine.id}
            routine={routine}
        />
    )

    return (
        <Container>
            {renderRoutines}
        </Container>
    )
}

export default RoutineHistory;