import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import {
    NavbarContainer,
    NavbarLinkContainer,
    NavbarLink
} from '../styles/NavStyle';

function Links() {

    const { user, updateUser, updateRoutines } = useContext(UserContext)

    const handleLogout = () => {

        fetch('/logout', {
            method: "DELETE"
        })
        updateUser(null)
        updateRoutines(null)
    }

    if (!user) {
        return (
            <NavbarContainer>
                <NavbarLinkContainer>
                    <NavbarLink to="/">
                        Login
                    </NavbarLink>
                    <NavbarLink to="/user-form">
                        Sign Up
                    </NavbarLink>
                </NavbarLinkContainer>
            </NavbarContainer>
        )
    }
    
    return (
        <NavbarContainer>
            <NavbarLinkContainer>
                <NavbarLink onClick={handleLogout} to="/">
                    Logout
                </NavbarLink>
                <NavbarLink to="/exercise-form">
                    Create New Exercise
                </NavbarLink>
                <NavbarLink to="/history">
                    Workout History
                </NavbarLink>
            </NavbarLinkContainer>
        </NavbarContainer>
    )
}

export default Links;