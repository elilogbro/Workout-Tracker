import styled from 'styled-components'

export const Button = styled.button`
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    border-radius: 3px;
    padding: 8px;
    margin: 4px;
    border: 0;
    color: #3a4149;
    background: #e7ebee;
    line-height: 1.15;
    font-size: 16px;
    :hover {
        transition: all .1s ease;
        box-shadow: ${props => props.red ? '0 0 0 0 #fff, 0 0 0 3px red' : '0 0 0 0 #fff, 0 0 0 3px #1de9b6'};
    }
    font-family: monospace;
`;

export const Container = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 500px;
    align-items: center;
    margin-right: 30vw;
`;

export const ButtonContainer = styled.div`
    flex-direction: row;
`;

export const Header = styled.th`
    padding: 10px;
    padding-left: ${props => props.right ? "56px" : "34px"};
`;

export const HeadersContainer = styled.tr`
    display: flex;
    width: 500px;
    align-self: center;
`;