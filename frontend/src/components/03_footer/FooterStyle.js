import styled from "styled-components"
import { Link } from "react-router-dom"
import { sizes } from "../01_config/Sizes"
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";



const Wrapper = styled.div`
    position: relative;
    background-color: rgba(7, 83, 91);
    margin: 0 ${sizes.marginsides};
    top: ${sizes.headerheight};
    padding: 20px;
    height: 200px;
    color: white;
    text-align: center;
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
    
`

const X = styled(BsTwitterX)`
    margin: 0 15px;
`

const Facebook = styled(FaFacebook)`
    
`

const TeachLearn = styled(Link)`
    font-family: "Rammetto One";
    font-weight: 300;
    font-size: 1.3rem;
    text-decoration: none;
    color: white;
`

export { Wrapper, TopBlock, BottomBlock, TextBlock, Heading, BodyText, LinkText, Instagram, X, Facebook, TeachLearn  }