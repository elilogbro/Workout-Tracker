import React, { useState, createContext } from 'react';

export const SelectedRoutineContext = createContext();

export const SelectedRoutineProvider = ({children}) => {

    const [selectedRoutine, setSelectedRoutine] = useState(null)
    const [routineExercises, setRoutineExercises] = useState(null)

    const updateSelectedRoutine = (value) => {
        setSelectedRoutine(value)
        if (value) {
            setRoutineExercises(value.exercises)
        }
    }

    const updateRoutineExercises = (value) => {
        setRoutineExercises(value)
    }

    return (
        <SelectedRoutineContext.Provider
            value={{
                selectedRoutine,
                updateSelectedRoutine,
                routineExercises,
                updateRoutineExercises
            }}
        >
            {children}
        </SelectedRoutineContext.Provider>
    )
}