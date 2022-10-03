import React from 'react';
import { Link } from 'react-router-dom';

function Links({user, setUser}) {

    const handleLogout = () => {

        fetch('/logout', {
            method: "DELETE"
        })
        setUser({})
    }
    
    return (
        <nav className="navbar">
            { Object.keys(user).length === 0 ?
                <div>
                    <Link to="/">Login</Link>
                    <Link to="/user-form">Sign Up</Link>
                </div>
                :
                    <div>
                        <Link onClick={handleLogout} to="/">Logout</Link>
                        <Link to="/exercise-form">Create New Exercise</Link>
                        <Link to="/history">Workout History</Link>
                    </div>
                }
        </nav>
    )
}

export default Links;