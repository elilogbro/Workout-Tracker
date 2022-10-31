import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

function Login() {

    const { updateUser } = useContext(UserContext)

    const [errors, setErrors] = useState(null)
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleFormChange = (e) => {
        const key = e.target.name
        const value = e.target.value
  
        setFormData({
            ...formData, [key] : value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
    
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(loggedInUser => {
                    onLogIn(loggedInUser)
                })
                setErrors(null)
            }
            else {
                res.json().then(json => setErrors(json.errors))
            }
        })
        setFormData({
            username: "",
            password: ""
        })
    }

    const onLogIn = (loggedInUser) => {
        updateUser(loggedInUser)
    }

    return (
        <form onSubmit={handleLogin}>
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleFormChange}    
            />
            <label>Password</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}    
            />
            <button type="submit">Login</button>
            {errors &&
                <div>
                    {errors}
                </div>
            }
        </form>
    )
}


export default Login;