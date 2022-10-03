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
    height: 100%;
    text-align: center;
    `;

const Image = styled.img`
    max-width: 100%;
    height: 6em;
`;

export default ExerciseCard;