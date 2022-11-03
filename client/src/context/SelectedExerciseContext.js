import React, { useState, createContext } from 'react';

export const SelectedExerciseContext = createContext();

export const SelectedExerciseProvider = ({children}) => {

    const [selectedExercise, setSelectedExercise] = useState(null)

    const updateSelectedExercise = (value) => {
        setSelectedExercise(value)
    }

    return (
        <SelectedExerciseContext.Provider
            value={{
                selectedExercise,
                updateSelectedExercise
            }}
        >
            {children}
        </SelectedExerciseContext.Provider>
    )
}