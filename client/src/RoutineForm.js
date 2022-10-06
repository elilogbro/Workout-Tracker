import React from 'react';
import ExerciseList from './ExerciseList'
import styled from 'styled-components';

function RoutineForm() {
    return (
        <Wrapper>
            <ExerciseList />
            <p>Hello</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default RoutineForm;