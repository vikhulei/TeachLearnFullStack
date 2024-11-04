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
    position: absolute;
    width: 600px;
    top: 80px;
    bottom: 80px;
    right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    text-align: right;
    font-weight: 900;
    z-index: 50;
`

const Header = styled.div`
    font-size: 3rem;
`

const Subheader = styled.div`
    font-size: 1rem;
`

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const SignUp = styled.button`
    width: 100px;
    height: 50px;
    border: red solid 3px;
    border-radius: 20px;
`

const LogIn = styled(SignUp)`
    border: lightblue solid 3px;
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

export { FirstWrapper, Image, ContentWrapper, SvgWrapper, TextButtonsWrapper, Header, Subheader, ButtonsWrapper, SignUp, LogIn,  NextBlock, ImageWrapper, SecondImage }

