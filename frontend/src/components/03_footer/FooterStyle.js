import styled from "styled-components"
import { Link } from "react-router-dom"
import { sizes } from "../01_config/Sizes"
import { FaRegUser } from "react-icons/fa6"

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
    gap: 70px;

`
    
const BottomBlock = styled.div`
   margin: 30px auto 0; 
   padding-top: 30px;
   border-top: solid white 2px;
   width: 700px;
`
    
const TextBlock = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    &:last-of-type {
        display: block;
    }
`

const Heading = styled.div`
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 15px;
`

const BodyText = styled.div`
    font-size: 0.9rem;
`

const LinkText = styled(Link)`
    font-size: 0.9rem;
    text-decoration: none;
    color: white;
`
const Instagram = styled(FaRegUser)`
    
`

const X = styled(FaRegUser)`
    margin: 0 10px;
`

const Facebook = styled(FaRegUser)`

`

const TeachLearn = styled(Link)`
    text-decoration: none;
    color: white;
`

export { Wrapper, TopBlock, BottomBlock, TextBlock, Heading, BodyText, LinkText, Instagram, X, Facebook, TeachLearn  }