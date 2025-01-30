import styled from "styled-components";
import { Link } from "react-router-dom";
import { sizes } from "../01_config/Sizes";

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    height: ${sizes.headerheight};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    z-index: 100;
`

const Logo = styled.div`
    margin-left: ${sizes.marginsides};
    font-family: "Rammetto One";
    font-size: 2.5rem;
    font-weight: 200;
    display: flex;
    align-items: center;
    cursor: pointer;
`

const NavWrapper = styled.div`
    display: flex;
`

const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 700px;
    @media(max-width: 1300px) {
        display: ${({hambMenu}) => hambMenu ? "flex" : "none"};
        position: absolute;
        top: ${sizes.headerheight};
        right: ${sizes.marginsides};
        width: 150px;
        flex-direction: column;
    }
`

const MenuItem = styled(Link)`
    font-weight: bold;
    font-size: 0.8rem;
    text-decoration: none;
    color: black;
    @media(max-width: 1300px) {
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
        padding-left: 5px;
        border-bottom: gray solid 1px;
        background-color: lightgray;
        font-weight: 500;
        cursor: pointer;
        user-select: none;
    }
`

const LogoItem = styled(MenuItem)`
    @media(max-width: 1300px) {
        background-color: white; 
        border-bottom: none;
    }
`

const HambWrapper = styled.div`
    position: absolute;
    cursor: pointer;
    right: 90px;
    height: fit-content;
    font-size: 30px;
    display: none;
    @media (max-width: 1300px) {
        display: block;
    }
`

export { Wrapper, LogoItem, Logo, NavWrapper, MenuWrapper, MenuItem, HambWrapper }