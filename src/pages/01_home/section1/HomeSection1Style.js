import styled from "styled-components";
import { sizes } from "../../../components/01_config/Sizes";


const Wrapper = styled.div`
    position: relative;
    height: ${sizes.blockOneHeight};
    width: 100%;
    width: calc(100vw - ${sizes.marginsides};
    @media(max-width: 800px) {
        width: 100vw;
    }
`

const ImageWrapper = styled.div`
    position: fixed;
    top: ${sizes.headerheight};
    left: ${sizes.marginsides};
    right: ${sizes.marginsides};
    height: ${sizes.blockOneHeight};
    z-index: -10;
    @media(max-width: 800px) {
        right: 0;
        left: 0;
    }
`

const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ColorLayer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: none;
    z-index: 1;
    @media(max-width: 800px) {
        display: block;
        background-color: rgba(7, 83, 91, 0.65);
    }
`

const TextButtonsWrapper = styled.div`
    position: relative;
    width: 700px;
    height: 100%;
    margin-left: auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;;
    color: white;
    text-align: right;
    z-index: 50;
    // background-color: red;
    @media(max-width: 800px) {
        width: 100%;
        padding: 30px 20px;
        right: 0;
        // left: 20px;
        text-align: center;
    }
`
    
const Header = styled.div`
    position: relative;
    width: 100%;
    font-size: calc(12px + 2.5vw);
    font-weight: 900;
    @media(max-width: 800px) {
        font-size: calc(20px + 3vw);
    }
`

const Subheader = styled.div`
    font-size: 1.4rem;
    // width: 400px;
    line-height: 2rem;
`

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media(max-width: 800px) {
        width: 100%;
        align-items: center;
    }
`

const SignUp = styled.button`
    width: 240px;
    height: 70px;
    font-size: 1.1rem;
    color: white;
    border: #D34E4E solid 4px;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0)
`

const LogIn = styled(SignUp)`
    border: #5B4ED3 solid 1px;
`

const BlockTwoWrapper = styled.div`
    position: relative;
    padding: 100px;
    background-color: #F5F5F5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`

const BlockTwoGroup = styled.div`
width: 300px;
height: 700px;
background-color: darkblue;
`
const BlockTwoImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 70%;
    left: -20px;
`

const BlockTwoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export { Image, Wrapper, TextButtonsWrapper, Header, Subheader, ButtonsWrapper, SignUp, LogIn,  BlockTwoWrapper, ImageWrapper, ColorLayer, BlockTwoGroup, BlockTwoImageWrapper, BlockTwoImage,  }