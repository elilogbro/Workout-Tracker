import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2vh;
    height: 2vh;
    width: 26vw;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid;
`;

export const P = styled.p`
    cursor: pointer;
`;

export const Button = styled.button`
    display: inline-block;
    outline: 0;
    border: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 4px;
    font-size: 13px;
    height: 30px;
    background-color: #0000000d;
    color: #0e0e10;
    padding: 0 20px;
    :hover {
        background-color: #0000001a;
    }
    margin: 2px;
`;