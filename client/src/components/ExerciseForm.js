import React, { useState } from 'react';
import styled from 'styled-components';

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
                res.json().then(exercise => handleNewExercise(exercise))
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

    const handleNewExercise = (exercise) => {
        console.log(exercise)
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Button = styled.button`
    width: fit-content;
    align-self: center;
    margin-top: 1em;
    cursor: pointer;
    border: 1px solid;
    border-radius: 0.5em;
`;

const Input = styled.input`
    border-radius: 0.5em;
    margin-top: 6px;
    width: 200px;
    align-self: center;
`;

const Label = styled.label`
    font-family: "Verdana";
    margin-top: 6px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: red;
  padding-top: 10px;
`;

export default ExerciseForm;