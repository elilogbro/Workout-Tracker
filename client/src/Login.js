import React from 'react';

function Login({formData, handleLogin, handleFormChange}) {


    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleFormChange}/>
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleFormChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;