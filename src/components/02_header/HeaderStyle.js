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
`

const MenuItem = styled(Link)`
    font-weight: bold;
    font-size: 0.8rem;
    text-decoration: none;
    color: black;
`

export { Wrapper, Logo, NavWrapper, MenuWrapper, MenuItem }