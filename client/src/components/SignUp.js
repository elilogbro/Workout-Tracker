import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import {
    Input,
    Form,
    Button,
    Label
} from "../styles/SignUpStyles";

function NewUserForm() {

    const { updateUser } = useContext(UserContext)
    
    const [errors, setErrors] = useState(null)
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
        .then(res => {
            if(res.ok) {
                res.json().then(signedUpUser => {
                    handleSignUp(signedUpUser)
                })
                setErrors(null)
            }
            else {
                res.json().then(json => setErrors(json.errors))
            }
        })
    
        setFormData({
            name: "",
            age: "",
            username: "",
            password: ""
        })
    }

    const handleSignUp = (signedUpUser) => {
        updateUser(signedUpUser)
    }

    return (
        <Form onSubmit={handleNewAccount}>
            <Label>Name</Label>
            <Input type="text" name="name" value={formData.name} onChange={handleFormChange}/>
            <Label>Age</Label>
            <Input type="number" name="age" value={formData.age} onChange={handleFormChange}/>
            <Label>Username</Label>
            <Input type="text" name="username" value={formData.username} onChange={handleFormChange}/>
            <Label>Password</Label>
            <Input type="password" name="password" value={formData.password} onChange={handleFormChange}/>
            <Button type="submit">Submit</Button>
            {errors &&
                Object.entries(errors).map(e =>
                    <div key={e[0]}>
                        {e[0] + " " + e[1]}
                    </div>
                )
            }
        </Form>
    )
}

export default NewUserForm;