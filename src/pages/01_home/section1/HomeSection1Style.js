import styled from "styled-components";
import { OutlineButton, MainInput } from "../../../components/01_config/MainStyles";
import { sizes } from "../../../components/01_config/Sizes";
import { colors } from "../../../components/01_config/Colors";


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
    // z-index: 0;
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

const SigninForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    // height: 200px;
    width: 90%;
    text-align: left;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.3);
`

const InputWrapper = styled.div`
    width: 100%;
    line-height: 1.4;
`

const Username = styled(MainInput)`
    width: 100%;
    height: 35px;
`

const Password = styled(Username)`

`

const Caption = styled.div`
    font-size: 1.3rem;
`

const LostPassword = styled.div`
    margin-top: 5px;
    font-style: italic;
    font-size: 0.7rem;
    cursor: pointer;
    &:active {
        color: grey;
    }
`

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // flex-direction: column;
    gap: 100px;
    @media(max-width: 800px) {
        width: 100%;
        align-items: center;
    }
`

const SignUp = styled.button`
    // width: 140px;
    // height: 40px;
    // font-size: 1.3rem;
    // color: white;
    // border: #D34E4E solid 2px;
    // border-radius: 5px;
    // cursor: pointer;
    // background-color: rgba(255, 255, 255, 0);
    // @media(max-width: 800px) {
    //     width: calc(30px + 60vw);
    //     height: 8vh;
    // }
    
`

const LogIn = styled(SignUp)`
    width: 140px;
    height: 40px;
    font-size: 1.3rem;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #5B4ED3;
    @media(max-width: 800px) {
        width: calc(30px + 60vw);
        height: 8vh;
    }
    &:active {
        transform: translate(2px, 2px);
    }
`

const Register = styled.div`
    font-size: 1.3rem;
    color: ${colors.grammar};
    color: darkblue;
    color: white;
    font-weight: 600;
    cursor: pointer;
    &:active {
        transform: translate(2px, 2px);
    }
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

const RegisterWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background-color: white;
    // z-index: 100;
`

export { Image, Wrapper, SigninForm, InputWrapper, Username, Password, Caption, LostPassword, TextButtonsWrapper, Header, Subheader, ButtonsWrapper, SignUp, LogIn, Register,  BlockTwoWrapper, ImageWrapper, ColorLayer, BlockTwoGroup, BlockTwoImageWrapper, BlockTwoImage, RegisterWrapper  }