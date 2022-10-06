import React from 'react';
import Search from './Search';
import ExerciseCard from './ExerciseCard';
import styled from 'styled-components';

function ExerciseList({exercises}) {

    const renderExerciseCards = exercises.map(exercise => <ExerciseCard exercise={exercise} key={exercise.id}/>)


    return (
        <Wrapper>
            {renderExerciseCards}
            <Search />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

export default ExerciseList;