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
    position: fixed;
    top: 115px;
    left: ${sizes.marginsides};
    right: ${sizes.marginsides};
    height: 700px;
    z-index: -10;

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
    
const FirstBlock = styled.div`
    position: relative;
    height: 700px;
    max-height: 90vh;
    z-index: 10;
`

const TextButtonsWrapper = styled.div`
    position: absolute;
    width: 600px;
    top: 7vh;
    bottom: 7vh;
    right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;;
    color: white;
    text-align: right;
    z-index: 50;
`
    
    const Header = styled.div`
    font-size: 3rem;
    font-weight: 900;
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
height: 500px;
background-color: darkblue;
`
const BlockTwoImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 60%;
    left: -20px;
`

const BlockTwoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export { FirstWrapper, Image, ContentWrapper, FirstBlock, TextButtonsWrapper, Header, Subheader, ButtonsWrapper, SignUp, LogIn,  BlockTwoWrapper, ImageWrapper, BlockTwoGroup, BlockTwoImageWrapper, BlockTwoImage,  }


// const BlockTwoContentWrapper = styled.div`
//     position: relative;
//     display: flex;
//     margin-left: 50px;
//     margin-right: 50px;
//     background-color: yellow;
//     justify-content: space-between;
//     gap: 100px;
// `