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
        </div>
    )
}

export default NewUserForm;