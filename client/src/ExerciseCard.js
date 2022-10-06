import React from 'react';
import styled from 'styled-components';


function ExerciseCard({exercise}) {
    
    return (
        <Wrapper>
            <p>{exercise.name}</p>
            <Image src={exercise.image} alt={exercise.name}></Image>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 14%;
    text-align: center;
    margin: 10px;
    border: 1px solid;
    padding: 4px;
    font-size: 16px;
`;

const Image = styled.img`
    max-width: 100%;
    height: 6em;
`;

export default ExerciseCard;