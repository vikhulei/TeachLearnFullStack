import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";
import vocabulary from "../../assets/02_vocabulary/vocabulary.jpg"

const paddingBetween = "50px"


const Wrapper = styled.div`
    position: relative;
    margin: ${sizes.headerheight} ${sizes.marginsides} 0;
    background-color: #EBEBEB;
    border-bottom: solid 2px white;
    display: flex;
    flex-direction: column;
    // height: 800px;
    gap: 50px;
    padding-bottom: 50px;
`

const Header = styled.div`
    position: relative;
    padding: 50px;
    background-color: rgba(7, 83, 91);
    color: white;
`

const HeaderText = styled.div`
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
`

const Title = styled.div`
    position: relative;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
`

const MainText = styled.div`
    position: relative;
    padding: 0 10vw;
    font-size: 1.1rem;
    line-height: 1.7;
    z-index: 20;
`

const FramesWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    gap: 7vw;
    z-index: 20;
`

const Frame = styled.div`
    box-sizing: border-box;
    width: 500px;
    padding: 15px 30px 40px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 0px 10px #D6C9C9;
    &:last-of-type {
       padding: 0px 0 0px;
       gap: 0;
       justify-items: stretch;
    }
`

const LanguageButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    margin-bottom: 00px;
`

const LanguageButton = styled.button`
    width: 100px;
    height: 30px;
    font-size: 0.95rem;
    font-weight: 500;
    text-transform: uppercase;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:nth-of-type(1) {
        border-bottom: solid black 1px;
    }
    &:hover {
        font-weight: 600;
        border-width: 2px;
    }
`

const Input = styled.input`
    position: relative;
    width: 150px;
    height: 24px;
    margin-right: 35px;
    background-color: #F3F3F3;
    background-color: #929292;
    border: none;
    //z-index: 40;
`

const Word = styled.div`
    user-select: none;
    // color: #D6C9C9;
    // color: #343434;
    font-weight: 600;
    font-size: 1.2rem;
`

const WordSpan = styled.span`
    margin-right: 5px;
    cursor: pointer;
    &:hover {
        font-weight: 750;
    }
`

const TranslatSpan = styled.span`
    color: black;
    font-weight: 700;
`

const LargeButtonsWrapper = styled.div`
    box-sizing: content-box;
    padding: 20px 0;
    // height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: solid lightgrey 2px;
`

const LargeButton = styled.button`
    width: 150px;
    height: 35px;
    background-color: transparent;
    border: 2px solid grey;
    color: black;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    &:first-of-type {
        background-color: lightgrey;
    }
    cursor: pointer;
    &:hover {
        font-size: 0.80rem;
        border: 3px solid   grey;
    }
    &:active {
        transform: translate(2px, 1px);
    }
`

const NumberButtonWrapper = styled.div`
    padding: 20px 0;
    // height: 30%;
    display: flex;
    flex: 1;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-bottom: solid lightgrey 2px;

`

const NumberButton = styled(LargeButton)`
    width: 100px;
    &:nth-of-type(3) {
        border: 2px solid #F58282;
    }
    &:nth-of-type(5) {
        border: 2px solid #F58282;
    }
    &:nth-of-type(9) {
        border: 2px solid #F58282;
    }
`

const MarkButton = styled(LargeButton)`

`

const Mark = styled.span`

`

const LargeCircle = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 300px;
    top: 300px;
    right: 10vw;
    background-color: rgba(217, 217, 217, 0.6);
    z-index: 10;
`

const MediumCircle = styled(LargeCircle)`
    width: 200px;
    height: 200px;
    top: 800px;
    left: 47vw;
`

const SmallCircle = styled(LargeCircle)`
    width: 50px;
    height: 50px;
    top: 600px;
    left: 42vw;
`

const ImageWrapper = styled.div``

const Image = styled.image``

const LineCircleTextWrapper = styled.div``

const CircleTextWrapper = styled.div``

const Circle = styled.div``

const Line = styled.div``

const SubHeading = styled.div``

export { Wrapper, Header, HeaderText, Title, MainText, FramesWrapper, Frame, LanguageButtonsWrapper, LanguageButton, Input, Word, WordSpan, TranslatSpan, LargeButtonsWrapper,LargeButton, NumberButtonWrapper, NumberButton, MarkButton, Mark, LargeCircle, MediumCircle, SmallCircle, ImageWrapper, Image, LineCircleTextWrapper, CircleTextWrapper, Circle, Line, SubHeading }








