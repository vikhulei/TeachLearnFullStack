import styled from "styled-components";
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { FaRegUser } from "react-icons/fa6";
import { sizes } from "../01_config/Sizes";

const Wrapper = styled.div`
    height: 90px;
    margin: 0 ${sizes.marginsides};
    // background-color: lightgreen;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
    font-family: "Rammetto One";
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    `
    
    const NavWrapper = styled.div`
    display: flex;
    
    `
    
    const User = styled(FaRegUser)`
    font-size: 1.4rem;
    border: 3.5px solid black;
    border-radius: 5px;
    margin-left: ${sizes.marginsides};
    `
    
    const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 700px;
    // background-color: red;
`

const MenuItem = styled.a`
    font-weight: bold;
    font-size: 0.76rem;
    text-decoration: none;
    color: black;
`

export { Wrapper, Logo, NavWrapper, User, MenuWrapper, MenuItem }