import React, { useState, createContext } from 'react';

export const IsInEditModeContext = createContext();

export const IsInEditModeProvider = ({children}) => {

    const [isInEditMode, setIsInEditMode] = useState(false)

    const updateIsInEditMode = (value) => {
        setIsInEditMode(value)
    }

    return (
        <IsInEditModeContext.Provider
            value={{ isInEditMode, updateIsInEditMode }}
        >
            {children}
        </IsInEditModeContext.Provider>
    )
}