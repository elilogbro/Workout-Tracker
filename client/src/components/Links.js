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
                <NavbarLink to="/">
                    Login
                </NavbarLink>
                <NavbarLink to="/user-form">
                    Sign Up
                </NavbarLink>
            </NavbarContainer>
        )
    }

    return (
        <NavbarContainer>
            <NavbarLinkContainer left="true">
                <NavbarLink onClick={handleLogout} to="/">
                    Logout
                </NavbarLink>
            </NavbarLinkContainer>
            <NavbarLinkContainer>
                <NavbarLink to="/exercise-form">
                    Create New Exercise
                </NavbarLink>
                <NavbarLink to={`/user/${user.id}`}>
                    Workout History
                </NavbarLink>
                <NavbarLink to="/exercises">
                    Create New Routine
                </NavbarLink>
            </NavbarLinkContainer>
        </NavbarContainer>
    )
}

export default Links;