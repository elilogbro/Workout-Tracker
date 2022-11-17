import React, { useState } from 'react';
import Input from './Input';
import {
    Row,
    Table
} from "../styles/ExercisesCardStyles";
import {
    Button,
    Container,
    ButtonContainer,
    Header,
    HeadersContainer
} from '../styles/NewExercisesCardStyles';
import ClockLoader from 'react-spinners/ClockLoader';

function NewExercisesCard({exercise, deleteExerciseFromRoutine, newRoutine}) {
    const [sets, setSets] = useState([])
    const [count, setCount] = useState(0)
    const [isSubmitted, setIsSubmitted] = useState(false)

    if (!exercise) {
        return <ClockLoader color="#1de9b6"/>
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

        let filteredSets = sets.filter(set => set.id !== currentSet.id)
        setSets(filteredSets)
    }

    const renderInputs = sets.length > 0 && sets.map(set =>
        <Input
            set={set}
            key={set.id}
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
        <Container>
            <h2>{exercise.name}</h2>
            <ButtonContainer>
                <Button onClick={handleClick}>Add Set</Button>
                <Button red="true" onClick={() => deleteExerciseFromRoutine(exercise)}>Delete from Routine</Button>
            </ButtonContainer>
            {sets.length > 0 &&
                    <Table>
                        <HeadersContainer>
                            <Header left="true">Weight</Header>
                            <Header right="true">Reps</Header>
                        </HeadersContainer>
                        <Row>
                            <form onSubmit={handleExerciseAndSetsSubmit}>
                                {renderInputs}
                                <Button
                                    type="submit"
                                    disabled={isSubmitted}    
                                >{isSubmitted ? "Submitted" : "Submit Sets"}</Button>                            
                            </form>
                        </Row>
                    </Table>
            }
        </Container>
    )
}

export default NewExercisesCard;