import React from 'react';

function ExerciseForm() {
    return (
        <div>
             <form>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Muscle Group</label>
                <input type="text" name="name" />
                <label>Image URL</label>
                <input type="text" name="name" />
            </form>
            <button type="submit">Submit</button>
        </div>
    )
}

export default ExerciseForm;