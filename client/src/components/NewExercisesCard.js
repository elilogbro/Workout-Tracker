import React, { useState } from 'react';
import Input from './Input';
import {
    Row,
    Table,
    HeadersContainer,
    Header
} from "../styles/ExercisesCardStyles";

function NewExercisesCard({exercise, deleteExerciseFromRoutine}) {
    const [count, setCount] = useState(0)

    if (!exercise) {
        return <div>Loading...</div>
    }

    const handleClick = () => {
        setCount(count + 1)
    }

    const renderInputs = Array.apply(null, { length: count }).map((e, i) => (
        <Input key={i}/>
    ))

    return (
        <div>
            <h2>{exercise.name}</h2>
            <button onClick={handleClick}>Add Set</button>
            {count > 0 &&
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