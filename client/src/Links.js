import React from 'react';
import { Link } from 'react-router-dom';

function Links() {
    return (
        <nav className="navbar">
            <Link to="/">Login</Link>
            <Link to="/exercise_form">Create New Exercise</Link>
            <Link to="/history">Workout History</Link>
            <Link to="/user_form">Sign Up</Link>
      </nav>
    )
}

export default Links;