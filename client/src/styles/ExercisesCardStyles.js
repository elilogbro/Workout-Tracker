import styled from 'styled-components';

export const Row = styled.td`
    display: flex;
    flex-direction: row;
    width: fit-content;
`;

export const ExercisesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: solid;
    padding: 10px;
`;

export const Table = styled.table`
    display: flex;
    flex-direction: column;
    width: fit-content;
`;

export const HeadersContainer = styled.tr`
    display: flex;
    align-self: center;
    width: 343px;
`;

export const Header = styled.th`
    padding: 10px;
    padding-left: ${props => props.right ? "56px" : "36px"};
`;

export const Form = styled.form`
    text-align-last: center;
`;

export const Button = styled.button`
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 3px;
    padding: 12px 24px;
    margin-top: 4px;
    border: 0;
    color: #3a4149;
    background: #e7ebee;
    line-height: 1.15;
    font-size: 16px;
    :hover {
        transition: all .1s ease;
        box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
    }
    :disabled {
        opacity: 0.5;
        box-shadow: none;
    }
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SecondaryButton = styled(Button)`
    padding: 4px;
    margin-left: 1vw;
    height: 36px;
    align-self: center;
    font-size: 12px;
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
    max-width: 100px;
    transition: all .2s ease;
    :hover{
        box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 2px;
    }
    :focus{
        background: #fff;
        outline: 0;
        box-shadow: 0 0 0 0 #fff inset, #1de9b6 0 0 0 3px;
    }
    text-align: center;
`;