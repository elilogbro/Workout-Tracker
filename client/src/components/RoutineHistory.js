import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import RoutineNameCard from './RoutineNameCard';

function RoutineHistory() {

    const { routines } = useContext(UserContext);

    if (!routines) {
        return (
            <div>Loading...</div>
        )
    }

    const renderRoutines = routines.map(routine =>
        <RoutineNameCard
            key={routine.id}
            routine={routine}
        />
    )

    return (
        <div>
            {renderRoutines}
        </div>
    )
}

export default RoutineHistory;