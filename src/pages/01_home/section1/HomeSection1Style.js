import styled from "styled-components";
import { OutlineButton } from "../../../components/01_config/MainStyles";
import { sizes } from "../../../components/01_config/Sizes";


const Wrapper = styled.div`
    position: relative;
    height: ${sizes.home1_desk_height};
    @media(max-width: 800px) {
        height: ${sizes.home1_mob_height};
    }
`

const ImageWrapper = styled.div`
    position: fixed;
    top: ${sizes.headerheight};
    left: ${sizes.margins_desk};
    right: ${sizes.margins_desk};
    height: ${sizes.home1_desk_height};
    z-index: -10;
    @media(max-width: 800px) {
        height: ${sizes.home1_mob_height};
        right: 0;
        left: 0;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ColorLayer = styled.div`
    position: absolute;
    display: none;
    @media(max-width: 800px) {
        display: block;
        width: 100%;
        height: 100%;
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
    @media(max-width: 800px) {
        height: ${sizes.home1_mob_height};
        width: 100%;
        padding: 6vh 10vw;
        right: 0;
        text-align: center;
    }
`
    
const Header = styled.div`
    position: relative;
    font-size: calc(12px + 2.5vw);
    font-weight: 900;
    @media(max-width: 800px) {
        font-size: calc(20px + 3.5vw);
    }
`

const Subheader = styled.div`
    font-size: calc(10px + 1.5vh);
    line-height: 2rem;
`

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    @media(max-width: 800px) {
        width: 100%;
        align-items: center;
    }
`

const SignUp = styled(OutlineButton)`
    width: 240px;
    height: 70px;
    font-size: 1.1rem;
    color: white;
    border: #D34E4E solid 4px;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);
    @media(max-width: 800px) {
        width: calc(30px + 60vw);
        height: 8vh;
    }
    
`

const LogIn = styled(OutlineButton)`
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