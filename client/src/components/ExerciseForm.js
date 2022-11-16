import React, { useState } from 'react';
import {
    Input,
    Form,
    Button,
    Label
} from '../styles/ExerciseFormStyles';

function ExerciseForm() {

    const [formData, setFormData] = useState({
        name: "",
        muscle_group: "",
        image: "",
        routine_id: null
    })
    const [errors, setErrors] = useState(null)

    const handleFormChange = (e) => {
        const key = e.target.name
        const value = e.target.value
  
        setFormData({
            ...formData, [key] : value
        })
    }

    const submitNewExercise = (e) => {
        e.preventDefault()
    
        fetch('/exercises', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok) {
                setErrors(null)
            }
            else {
              res.json().then(json => setErrors(json.errors))
            }
          })
    
        setFormData({
            name: "",
            muscle_group: "",
            image: "",
            routine_id: null
        })
    }

    return (
        <Form onSubmit={submitNewExercise}>
            <Label>Name</Label>
            <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
            />
            <Label>Muscle Group</Label>
            <Input
                type="text"
                name="muscle_group"
                value={formData.muscle_group}
                onChange={handleFormChange}
            />
            <Label>Image URL</Label>
            <Input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleFormChange}
            />
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

export default ExerciseForm;