import styled from "styled-components";
import { sizes } from "../../../components/01_config/Sizes";


const Wrapper = styled.div`
    position: relative;
    height: ${sizes.blockOneHeight};
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
    // background-color: red;
    // z-index: 100;
    @media(max-width: 800px) {
        right: 0;
        left: 0;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const TextButtonsWrapper = styled.div`
    display: none;
    position: absolute;
    width: 600px;
    padding: 30px 0;
    right: 40px;
    top: 0;
    bottom: 0;
    display: flex;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;;
    color: white;
    text-align: right;
    z-index: 50;
    @media(max-width: 800px) {
        width: 100%;
        padding-right: ${sizes.marginsides};
        right: 0;
    }
`
    
const Header = styled.div`
    width: 100%;
    font-size: calc(12px + 2.5vw);
    font-weight: 900;
    @media(max-width: 800px) {
        // text-align: center;
        font-size: calc(10px + 3vw);
        // margin-right: ${sizes.marginsides}
    }
`

const Subheader = styled.div`
    font-size: 1.4rem;
    width: 400px;
    line-height: 2rem;
`

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
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

export { Image, Wrapper, TextButtonsWrapper, Header, Subheader, ButtonsWrapper, SignUp, LogIn,  BlockTwoWrapper, ImageWrapper, BlockTwoGroup, BlockTwoImageWrapper, BlockTwoImage,  }