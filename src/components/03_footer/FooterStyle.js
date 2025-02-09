import styled from "styled-components"
import { Link } from "react-router-dom"
import { sizes } from "../01_config/Sizes"
import { colors } from "../01_config/Colors";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";



const Wrapper = styled.div`
    position: relative;
    background-color: ${colors.mainDark};
    margin: 0 ${sizes.margins_desk};
    color: white;
    text-align: center;
    border-bottom: white solid 2px;
    z-index: 99;
    @media(max-width: 800px) {
        margin: 0;
    }
`

const TopBlock = styled.div`
    display: flex;
    justify-content: center;
    gap: 10vw;
    padding: 20px 0;
    // background-color: red;
    @media(max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`
    
const BottomBlock = styled.div`
    margin: 0px auto; 
    padding: 20px 0;
    border-top: solid white 2px;
    width: 70vw;
`
    
const TextBlock = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    // background-color: green;
    &:last-of-type {
        display: block;
    }
    @media(max-width: 800px) {
        text-align: center;
    }
`

const Heading = styled.div`
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 10px;
`

const BodyText = styled.div`
    font-size: 0.9rem;
`

const LinkText = styled(Link)`
    font-size: 0.9rem;
    text-decoration: none;
    color: white;
`
const Instagram = styled(FaInstagram)`
    cursor: pointer;
`

const X = styled(BsTwitterX)`
    margin: 0 15px;
    cursor: pointer;
`

const Facebook = styled(FaFacebook)`
    cursor: pointer;    
`

const TeachLearn = styled(Link)`
    font-family: "Rammetto One";
    font-weight: 300;
    font-size: 1.3rem;
    text-decoration: none;
    color: white;
    @media(max-width: 800px) {
        font-size: 1rem;
    }
`

export { Wrapper, TopBlock, BottomBlock, TextBlock, Heading, BodyText, LinkText, Instagram, X, Facebook, TeachLearn  }