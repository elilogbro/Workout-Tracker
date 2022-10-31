import React from 'react';
import {NavbarContainer, NavbarLinkContainer,NavbarLink} from '../styles/NavStyle';

function Links({user, setUser}) {

    const handleLogout = () => {

        fetch('/logout', {
            method: "DELETE"
        })
        setUser({})
    }
    
    return (
        <NavbarContainer>
            { Object.keys(user).length === 0 ?
                <NavbarLinkContainer>
                    <NavbarLink to="/">
                        Login
                    </NavbarLink>
                    <NavbarLink to="/user-form">
                        Sign Up
                    </NavbarLink>
                </NavbarLinkContainer>
                :
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
                }
        </NavbarContainer>
    )
}

export default Links;