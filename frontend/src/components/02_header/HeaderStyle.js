import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { sizes } from "../01_config/Sizes";

const Wrapper = styled.div`
    height: 110px;
    margin: 0 ${sizes.marginsides};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
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

const User = styled(FaRegUser)`
    font-size: 1.4rem;
    border: 3.5px solid black;
    border-radius: 5px;
    margin-left: ${sizes.marginsides};
    cursor: pointer;
`

const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 700px;
`

const MenuItem = styled(Link)`
    font-weight: bold;
    font-size: 0.8rem;
    text-decoration: none;
    color: black;
`

export { Wrapper, Logo, NavWrapper, User, MenuWrapper, MenuItem }