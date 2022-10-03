import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewUserForm({setUser}) {

    const history = useHistory();
    const [formData, setFormData] = useState({
        name: "",
        age: "",
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

    const handleNewAccount = (e) => {
        e.preventDefault()
    
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(user => setUser(user))
    
        setFormData({
            name: "",
            age: "",
            username: "",
            password: ""
        })
    
        history.push('/history');
      }

    return (
        <div>
            <form onSubmit={handleNewAccount}>
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleFormChange}/>
                <label>Age</label>
                <input type="number" name="age" value={formData.age} onChange={handleFormChange}/>
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleFormChange}/>
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleFormChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewUserForm;