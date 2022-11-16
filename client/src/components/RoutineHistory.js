import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import RoutineContainer from './RoutineContainer';
import {
    Routines,
    Container
} from '../styles/RoutineHistoryStyles';
import ClockLoader from 'react-spinners/ClockLoader';

function RoutineHistory() {

    const { routines } = useContext(UserContext);

    if (!routines) {
        return <ClockLoader color="#1de9b6"/>
    }
    
    const renderRoutines = routines.map(routine =>
        <RoutineContainer
            key={routine.id}
            routine={routine}
        />
    )

    return (
        <Container>
            <h1>Workout History</h1>
            <Routines>
                {renderRoutines}
            </Routines>
        </Container>
    )
}

export default RoutineHistory;