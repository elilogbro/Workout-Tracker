import styled from 'styled-components';

export const ExercisesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 30vw;
    overflow-y: scroll;
    height: 84vh;
`;

export const Wrapper = styled.div`
    display: flex;
`;

export const Input = styled.input`  
    box-shadow: inset #abacaf 0 0 0 2px;
    border: 0;
    margin: 2px;
    background: rgba(0, 0, 0, 0);
    appearance: none;
    position: relative;
    border-radius: 3px;
    padding: 9px 12px;
    line-height: 1.4;
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
    margin-bottom: 4vh;
    align-self: center;
    width: 
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    // justify-content: center;
    padding: 6vw;
    width: 30vw;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Label = styled.label`
    padding-bottom: 2vh;
`;

export const Button = styled.button`
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 3px;
    padding: 12px 24px;
    border: 0;
    color: #3a4149;
    background: #e7ebee;
    font-size: 16px;
    :hover {
        transition: all .1s ease;
        box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
    }
    margin-top: 4vh;
    margin-left: 4px;
    font-family: monospace;
`;

export const NewExercisesContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 50vw;
    margin-left: 20vw;
`;

export const Header = styled.h2`
    padding-left: 13vw;
`;

export const CreateRoutineContainer = styled.div`
    margin-left: 14vw;
`;