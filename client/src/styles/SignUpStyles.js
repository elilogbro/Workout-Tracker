import styled from "styled-components";

export const Input = styled.input`    
    box-shadow: inset #abacaf 0 0 0 2px;
    border: 0;
    margin: 2px;
    background: rgba(0, 0, 0, 0);
    appearance: none;
    position: relative;
    border-radius: 3px;
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-weight: 400;
    transition: all .2s ease;
    :hover{
        box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 2px;
    }
    :focus{
        background: #fff;
        outline: 0;
        box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 3px;
    }
    align-self: center;
    margin-bottom: 2vh;
    padding: 2vh;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: flex-end;
    padding: 2px;
    width: 30vw;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: solid black;
`;

export const Button = styled.button`
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 3px;
    padding: 12px 24px;
    margin: 4px;
    border: 0;
    color: #3a4149;
    background: #e7ebee;
    font-size: 14px;
    :hover {
        transition: all .1s ease;
        box-shadow: ${props => props.red ? '0 0 0 0 #fff, 0 0 0 3px red' : '0 0 0 0 #fff, 0 0 0 3px #1de9b6'};
    }
    :disabled {
        opacity: 0.5;
        box-shadow: none;
    }
    align-self: center;
    margin-top: 4vh;
    margin-bottom: 2vh;
`;

export const Label = styled.label`
    padding: 2vh;
`;