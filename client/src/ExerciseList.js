import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import Search from './Search';
import ExerciseCard from './ExerciseCard';
import styled from 'styled-components';

function ExerciseList() {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        fetch('/exercises')
        .then(res => res.json())
        .then(exercises => setExercises(exercises))
    }, [])

    const renderExerciseCards = exercises.map(exercise => <ExerciseCard exercise={exercise} key={exercise.id}/>)
    
    return (
        <Wrapper>
            {renderExerciseCards}
            <Filter />
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