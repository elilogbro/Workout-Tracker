import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: fit-content;
    background-color: #1de9b6;
    display: flex;
    flex-direction: column;
    font-family: monospace;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: black;
    font-size: large;
    text-decoration: none;
    margin: 10px;
    text-align: center;
    &:hover,
    &:focus{
        color: #2F4F4F;
    }
    &:active{
        color: #20B2AA;
    }
    flex: ${props => props.right && 'auto'};
`;