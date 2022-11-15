import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useHistory } from "react-router-dom";
import {
    Form,
    InputContainer,
    CenterContainer,
    Input,
    Label,
    Button
} from '../styles/LoginStyles';

function Login() {

    const { updateUser, user } = useContext(UserContext)

    const [errors, setErrors] = useState(null)
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const history = useHistory();

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

    if (user) {
        history.push(`/user/${user.id}`)
    }

    return (
        <Form onSubmit={handleLogin}>
            <CenterContainer>
                <InputContainer>
                    <Label>Username</Label>
                    <Input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleFormChange}    
                    />
                </InputContainer>
                <InputContainer>
                    <Label>Password</Label>
                    <Input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleFormChange}    
                    />
                </InputContainer>
            </CenterContainer>
            <Button type="submit">Login</Button>
            {errors &&
                <div>
                    {errors}
                </div>
            }
        </Form>
    )
}


export default Login;