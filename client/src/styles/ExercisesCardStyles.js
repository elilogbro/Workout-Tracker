import styled from 'styled-components';

export const Row = styled.td`
    display: flex;
    flex-direction: row;
`;

export const ExercisesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Table = styled.table`
    display: flex;
    flex-direction: column;
`;

export const HeadersContainer = styled.tr`
    align-self: center;
`;

export const Header = styled.th`
    padding: 10px;
    padding-right: ${props => props.left && '30px'};
    padding-left: ${props => props.right && '30px'};
`;