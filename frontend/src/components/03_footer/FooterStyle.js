import styled from "styled-components"
import { Link } from "react-router-dom"
import { sizes } from "../01_config/Sizes"
import { FaRegUser } from "react-icons/fa6"

const Wrapper = styled.div`
    position: relative;
    background-color: rgba(7, 83, 91);
    margin: 0 ${sizes.marginsides};
    top: ${sizes.headerheight};
    padding: 10px;
    height: 200px;
    color: white;
    font-size: 1.3rem;
    text-align: center;
    z-index: 99;
`

const TopBlock = styled.div`

`

const BottomBlock = styled.div`

`

const TextBlock = styled.div`

`

const Heading = styled.div`

`

const BodyText = styled.div`

`

const LinkText = styled(Link)`

`
const Instagram = styled(FaRegUser)`

`

const X = styled(FaRegUser)`

`

const Facebook = styled(FaRegUser)`

`

const TeachLearn = styled(Link)`

`

export { Wrapper, TopBlock, BottomBlock, TextBlock, Heading, BodyText, LinkText, Instagram, X, Facebook, TeachLearn  }