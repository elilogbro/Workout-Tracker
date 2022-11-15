import styled from 'styled-components';

export const Container = styled.div`
    align-self: center;
    text-align-last: center;
    border-bottom: solid gray 0.75px;
    padding-bottom: 2vh;
    width: 100%;
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