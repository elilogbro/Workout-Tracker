import React, { useState, useContext } from 'react';
import { IsInEditModeContext } from "../context/IsInEditModeContext";
import { Row } from '../styles/ExercisesCardStyles';
import { Input, Form, Container, Button } from '../styles/SetsStyles';
import ClockLoader from 'react-spinners/ClockLoader';

function Sets({
    set,
    onUpdateSet,
    exercise,
    sets,
    submitNewSets
}) {

    const { isInEditMode } = useContext(IsInEditModeContext);

    const [updatedWeight, setUpdatedWeight] = useState(null)
    const [updatedReps, setUpdatedReps] = useState(null)
    const [selectedSet, setSelectedSet] = useState(null)
    const [newWeight, setNewWeight] = useState(null)
    const [newReps, setNewReps] = useState(null)
    const [updatedSet, setUpdatedSet] = useState(null)
    const [isClicked, setIsClicked] = useState(false)

    if (!exercise) {
        return <ClockLoader color="#1de9b6"/>
    }

    const handleUpdatedSet = (e) => {
        e.preventDefault();
        
        fetch(`/workout_sets/${selectedSet.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({weight: updatedWeight, reps: updatedReps})
        })
        .then(res => res.json())
        .then(updatedSet => {
            onUpdateSet(updatedSet)
            setUpdatedSet(updatedSet)
        })
    }

    const handleNewExerciseSets = (e) => {
        e.preventDefault();

        setIsClicked(true)

        set.weight = newWeight
        set.reps = newReps

        sets.map(currentSet => currentSet.id === set.id ? set : currentSet)
        
        if (set.id === sets[sets.length - 1].id) {
            submitNewSets(sets)
        }
    }

    const isValid = Boolean((updatedWeight && updatedReps) || (newWeight && newReps))

    if (!isInEditMode) {
        return (
            <Container>
                <Input
                    type="number"
                    placeholder={set.weight}
                    value={newWeight}
                    onChange={e => setNewWeight(e.target.value)}
                />
                <Input
                    type="number"
                    placeholder={set.reps}
                    value={newReps}
                    onChange={e => setNewReps(e.target.value)}
                />
                <Button onClick={handleNewExerciseSets} disabled={!isValid || isClicked}>{isClicked ? "✓" : "Done"}</Button>
            </Container>
        )
    }

    return (
        <Row>
            <Form
                key={set.id}
            >
                <Input
                    type="number"
                    placeholder={set.weight}
                    value={updatedWeight}
                    onClick={() => setSelectedSet(set)}
                    onKeyPress={() => setSelectedSet(set)}
                    onChange={e => setUpdatedWeight(e.target.value)}
                />
                <Input
                    type="number"
                    placeholder={set.reps}
                    value={updatedReps}
                    onClick={() => setSelectedSet(set)}
                    onKeyPress={() => setSelectedSet(set)}
                    onChange={e => setUpdatedReps(e.target.value)}
                />
                <Button
                    type="submit"
                    disabled={!isValid}
                    onClick={handleUpdatedSet}
                >
                    {updatedSet ? "Updated!" : "Update"}
                </Button>
            </Form>
        </Row>
    )
}

export default Sets;