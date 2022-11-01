import React, { useState, useEffect, useContext } from 'react';
import { IsInEditModeContext } from "../context/IsInEditModeContext";
import Sets from './Sets';
import {
    ExercisesContainer,
    Table,
    HeadersContainer,
    Header
} from '../styles/ExercisesCardStyles';

function ExercisesCard({exercise}) {

    const [sets, setSets] = useState(null)
    const [errors, setErrors] = useState(null)

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

    const onUpdateSet = (updatedSet) => {
        const updatedSets = sets.map(set => set.id === updatedSet.id ? updatedSet : set)

       setSets(updatedSets)
    }

    const renderSets = sets.map(set => 
        <Sets
            set={set}
            key={set.id}
            onUpdateSet={onUpdateSet}
            setErrors={setErrors}
        />
    )

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
            {errors &&
                Object.entries(errors).map(e =>
                    <div key={e[0]}>
                        {e[0] + " " + e[1]}
                    </div>
                )
            }
        </ExercisesContainer>
    )
}

export default ExercisesCard;