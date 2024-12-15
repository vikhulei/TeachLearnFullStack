import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
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

const User = styled(FaRegUser)`
    font-size: 1.4rem;
    border: 3.5px solid black;
    border-radius: 5px;
    margin: 0 ${sizes.marginsides};
    cursor: pointer;
`

const UserWrapper = styled.div`
    position: absolute;
    width: 150px;
    // height: 100px;
    right: ${sizes.marginsides};
    top: ${sizes.headerheight};
`
const UserItem = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    border-bottom: gray solid 1px;
    background-color: lightgray;
    cursor: pointer;
    user-select: none;
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

const TWrapper = styled.div`
    position: fixed;
    width: 700px;
    height: 110px;
`

const TNav = styled.div`
    // position: fixed;
    width: 100px;
    height: 100%;
    margin-right:50px;
    background-color: coral;
`

const YouAreLogged = styled.div`
    position: absolute;
    bottom: 0;
    right: ${sizes.marginsides};
    color: red;
    color: ${({logged}) => logged=="logged out" ? "red" : "green"}
`

export { Wrapper, Logo, NavWrapper, User, UserWrapper, UserItem, MenuWrapper, MenuItem, TWrapper, TNav, YouAreLogged }