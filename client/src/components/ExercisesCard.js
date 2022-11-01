import React, { useState, useEffect, useContext } from 'react';
import { IsInEditModeContext } from "../context/IsInEditModeContext";
import {
    Row,
    ExercisesContainer,
    Table,
    HeadersContainer,
    Header
} from '../styles/ExercisesCardStyles';

function ExercisesCard({exercise}) {

    const [sets, setSets] = useState(null)

    const { isInEditMode } = useContext(IsInEditModeContext);

    useEffect(() => {
        fetch(`/exercises/${exercise.id}`)
        .then(res => res.json())
        .then(currentExercise => {
            setSets(currentExercise.workout_sets)
        })
    }, [exercise.id])

    if (!sets) {
        return <div>Loading...</div>
    }

    
    const renderSets = sets.map(set => {
        return (
            <Row>
                <form key={set.id}>
                    <input type="number" placeholder={set.weight}/>
                    <input type="number" placeholder={set.reps}/>
                </form>
            </Row>
        )
    })

    return (
        <ExercisesContainer>
            <h2>{exercise.name}</h2>
            <Table>
                <HeadersContainer>
                    <Header left="true">Weight</Header>
                    <Header right="true">Reps</Header>
                </HeadersContainer>
                {renderSets}
            </Table>
        </ExercisesContainer>
    )
}

export default ExercisesCard;