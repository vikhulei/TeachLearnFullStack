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
    padding: 0 ${sizes.margins_desk};
    @media(max-width: 800px) {
        padding: 0 ${sizes.marginmobile};
        height: ${sizes.headerhight_mobile}
    }
`

const Logo = styled.div`
    // margin-left: ${sizes.margins_desk};
    font-family: "Rammetto One";
    font-size: 3vw;
    font-size: calc(12px + 2vw);
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
        right: 0;
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
    @media(max-width: 800px) {
        display: flex;
        justify-content: center;
    }
`

const LogoItem = styled(MenuItem)`
    @media(max-width: 1300px) {
        background-color: white; 
        border-bottom: none;
    }
    @media(max-width: 800px) {
        justify-content: left;
    }
`

const HambWrapper = styled.div`
    position: absolute;
    cursor: pointer;
    top: 0;
    height: fit-content;
    font-size: 30px;
    display: none;
    @media (max-width: 1300px) {
        height: 100%;
        display: flex;
        align-items: center;
        right: calc(40px + ${sizes.marginsides})
    }
    @media(max-width: 800px) {
            right: calc(20px + ${sizes.margins_desk})
    }
`

export { Wrapper, LogoItem, Logo, NavWrapper, MenuWrapper, MenuItem, HambWrapper }