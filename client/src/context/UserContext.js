import React, { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [routines, setRoutines] = useState(null)

    const updateUser = (value) => {
        setUser(value)
        if (value) {
            setRoutines(value.routines)
        }
    }

    const updateRoutines = (value) => {
        setRoutines(value)
    }

    useEffect(() => {
        fetch('/me')
        .then(res => {
            if (res.ok) {
                res.json()
                .then(user => updateUser(user))
            }
        })
    }, [])

    return (
        <UserContext.Provider
            value={{ user, updateUser, routines, updateRoutines }}
        >
            {children}
        </UserContext.Provider>
    )
}