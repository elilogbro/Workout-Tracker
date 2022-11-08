import React, { useState } from 'react';
import Input from './Input';
import {
    Row,
    Table,
    HeadersContainer,
    Header
} from "../styles/ExercisesCardStyles";

function NewExercisesCard({exercise, deleteExerciseFromRoutine}) {
    const [sets, setSets] = useState([])
    const [count, setCount] = useState(0)

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
    
    console.log(sets)

    const renderInputs = sets.length > 0 && sets.map(set =>
        <Input
            set={set}
            handleDeletedSet={handleDeletedSet}
        />
    )

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
                            <form>
                                {renderInputs}                                
                            </form>
                        </Row>
                    </Table>
            }
            <button onClick={() => deleteExerciseFromRoutine(exercise)}>Delete from Routine</button>
        </div>
    )
}

export default NewExercisesCard;