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
`

const FramesWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    gap: 7vw;
`

const Frame = styled.div`
    box-sizing: border-box;
    width: 500px;
    padding: 40px 30px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:15px;
    background-color: white;
    box-shadow: 0px 0px 10px #D6C9C9;
`

const LanguageButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    margin-bottom: 20px;
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
    width: 150px;
    height: 24px;
    margin-right: 35px;
    background-color: #929292;
    background-color: #F3F3F3;
    border: none;
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
    padding-bottom: 20px;
    display: flex;
    justify-content: space-around;
    border-bottom: solid gray 3px;
`

const LargeButton = styled.button`
    width: 150px;
    height: 30px;
    background-color: transparent;
    border: 2px solid lightgrey;
    color: black;
`

const NumberButtonWrapper = styled.div`

`

const NumberButton = styled(LargeButton)`

`

const MarkButton = styled(LargeButton)`

`

const Mark = styled.span`

`

const LargeCircle = styled.div``

const MediumCircle = styled.div``

const SmallCircle = styled.div``

const ImageWrapper = styled.div``

const Image = styled.image``

const LineCircleTextWrapper = styled.div``

const CircleTextWrapper = styled.div``

const Circle = styled.div``

const Line = styled.div``

const SubHeading = styled.div``

export { Wrapper, Header, HeaderText, Title, MainText, FramesWrapper, Frame, LanguageButtonsWrapper, LanguageButton, Input, Word, WordSpan, TranslatSpan, LargeButtonsWrapper,LargeButton, NumberButtonWrapper, NumberButton, MarkButton, Mark, LargeCircle, MediumCircle, SmallCircle, ImageWrapper, Image, LineCircleTextWrapper, CircleTextWrapper, Circle, Line, SubHeading }








