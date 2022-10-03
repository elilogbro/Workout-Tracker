import React from 'react';

function NewUserForm() {
    return (
        <div>
            <form>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Age</label>
                <input type="number" name="name" />
                <label>Username</label>
                <input type="text" name="name" />
                <label>Password</label>
                <input type="text" name="name" />
            </form>
            <button type="submit">Submit</button>
        </div>
    )
}

export default NewUserForm;