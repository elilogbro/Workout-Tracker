import {Link} from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer= styled.nav`
    width: 100%;
    height:50px;
    background-color: #5F9EA0;
    display: flex;
    flex-direction: column;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
    `;

export const NavbarLink = styled(Link)`
    color:white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    &:hover,
    &:focus{
        color: #2F4F4F;
    }
    &:active{
        color: #20B2AA;
    }
`;