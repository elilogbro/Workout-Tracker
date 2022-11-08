import React, { useState } from 'react';
import Input from './Input';
import {
    Row,
    Table,
    HeadersContainer,
    Header
} from "../styles/ExercisesCardStyles";

function NewExercisesCard({exercise, deleteExerciseFromRoutine, newRoutine}) {
    const [sets, setSets] = useState([])
    const [count, setCount] = useState(0)
    const [isSubmitted, setIsSubmitted] = useState(false)

    if (!exercise) {
        return <div>Loading...</div>
    }

    const handleClick = () => {
        setSets([...sets, {
            id: count,
            weight: "",
            reps: ""
        }])

        setCount(count + 1)
    }

    const handleDeletedSet = (currentSet, e) => {
        e.preventDefault();

        const remainingSets = sets.filter(set => set.id !== currentSet.id)
        setSets(remainingSets)
    }

    const renderInputs = sets.length > 0 && sets.map(set =>
        <Input
            set={set}
            handleDeletedSet={handleDeletedSet}
        />
    )

    const handleExerciseAndSetsSubmit = (e) => {
        e.preventDefault();

        fetch('/exercises', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: exercise.name,
                image: exercise.image,
                muscle_group: exercise.muscle_group,
                routine_id: newRoutine.id
            })
        })
        .then(res => res.json())
        .then(newExercise => {
            sets.forEach(set =>
                fetch('/workout_sets', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        exercise_id: newExercise.id,
                        weight: set.weight,
                        reps: set.reps
                    })
                })
            )
        })

        setIsSubmitted(true)
    }

    return (
        <div>
            <h2>{exercise.name}</h2>
            <button onClick={handleClick}>Add Set</button>
            {sets.length > 0 &&
                    <Table>
                        <HeadersContainer>
                            <Header left="true">Weight</Header>
                            <Header right="true">Reps</Header>
                        </HeadersContainer>
                        <Row>
                            <form onSubmit={handleExerciseAndSetsSubmit}>
                                {renderInputs}
                                <button
                                    type="submit"
                                    disabled={isSubmitted}    
                                >{isSubmitted ? "Submitted" : "Submit Sets"}</button>                            
                            </form>
                        </Row>
                    </Table>
            }
            <button onClick={() => deleteExerciseFromRoutine(exercise)}>Delete from Routine</button>
        </div>
    )
}

export default NewExercisesCard;