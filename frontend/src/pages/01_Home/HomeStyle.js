import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";
import home from "../../assets/home/home.jpg"



const FirstWrapper = styled.div`
    position: fixed; 
    top: 115px;
    width: 100vw;
    height: 100vh;
`

const ImageWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 ${sizes.marginsides};
    height: 100%;
`
   
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ContentWrapper = styled.div`
    position: relative;
    top: 115px;
    margin: 0 ${sizes.marginsides};
`
    
const SvgWrapper = styled.div`
    position: relative;
    height: 80vh;
    z-index: 10;
`

const TextButtonsWrapper = styled.div`
    top
`

const Header = styled.div`

`

const Subheader = styled.div`

`

const SignUp = styled.button`

`

const LogIn = styled.button`

`

const NextBlock = styled.div`
    position: relative;
    height: 1000px;
    background-color: lightblue;
    border: lightgray solid 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SecondImage = styled.img`
    width: 30vw;

`

export { FirstWrapper, Image, ContentWrapper, SvgWrapper, Header, Subheader, SignUp, LogIn,  NextBlock, ImageWrapper, SecondImage }

