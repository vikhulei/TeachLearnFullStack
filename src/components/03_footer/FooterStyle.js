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
    margin: 0 ${sizes.marginsides};
    padding: 20px;
    height: 200px;
    color: white;
    text-align: center;
    border-bottom: white solid 2px;
    z-index: 99;
`

const TopBlock = styled.div`
    display: flex;
    justify-content: center;
    gap: 10vw;

`
    
const BottomBlock = styled.div`
   margin: 30px auto 0; 
   padding-top: 20px;
   border-top: solid white 2px;
   width: 70vw;
`
    
const TextBlock = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    &:last-of-type {
        display: block;
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
`

export { Wrapper, TopBlock, BottomBlock, TextBlock, Heading, BodyText, LinkText, Instagram, X, Facebook, TeachLearn  }