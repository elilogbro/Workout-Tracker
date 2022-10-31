import React from 'react';
import styled from 'styled-components';

export default function Login({formData, handleLogin, handleFormChange, user, setErrors, errors}) {

    const resetErrors = () => {
        setErrors([])
    }
    
    if (errors) {
        return (
        <Wrapper2>
            <Form onSubmit={handleLogin}>
                <Label>Username</Label>
                <Input type="text" name="username" value={formData.username} onChange={handleFormChange} onMouseOver={resetErrors}/>
                <Label>Password</Label>
                <Input type="password" name="password" value={formData.password} onChange={handleFormChange}/>
                <Button type="submit">Submit</Button>
            </Form>
            <Div>Sorry, {errors}!</Div>
        </Wrapper2>
        )
    }

    else {
        return <ValidLogin formData={formData} handleLogin={handleLogin} handleFormChange={handleFormChange} user={user} setErrors={setErrors}/>
    }
}



function ValidLogin({formData, handleLogin, handleFormChange, user, setErrors}) {

    return (
        <Wrapper1>
            {Object.keys(user).length === 0 ?
                <Form onSubmit={handleLogin}>
                    <Label>Username</Label>
                    <Input type="text" name="username" value={formData.username} onChange={handleFormChange} />
                    <Label>Password</Label>
                    <Input type="password" name="password" value={formData.password} onChange={handleFormChange}/>
                    <Button type="submit">Submit</Button>
                </Form>
                    :
                        <P>Welcome, {user.name}!</P>
                        }
        </Wrapper1>
    )
}

const Wrapper1 = styled.div`
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
    width: 200px;
`;

const Label = styled.label`
    font-family: "Verdana";
    margin-top: 6px;
`;

const P = styled.p`
    font-size: 32px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: red;
  padding-top: 10px;
`;

const Wrapper2 = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid;
    padding-bottom: 12px;
    flex-direction: column;
    align-items: center;
`;

// export default Login;