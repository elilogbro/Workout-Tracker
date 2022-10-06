import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

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
        <Wrapper>
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
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid;
    padding-bottom: 12px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Button = styled.button`
    width: fit-content;
    align-self: center;
    margin-top: 1em;
`;

const Input = styled.input`
    border-radius: 0.5em;
    margin-top: 6px;
`;

const Label = styled.label`
    font-family: "Verdana";
    margin-top: 6px;
`;

export default NewUserForm;