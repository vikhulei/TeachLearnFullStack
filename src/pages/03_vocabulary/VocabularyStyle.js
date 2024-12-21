import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";
import vocabulary from "../../assets/02_vocabulary/vocabulary.jpg"
import { colors } from "../../components/01_config/Colors"

const Wrapper = styled.div`
    position: relative;
    margin: ${sizes.headerheight} ${sizes.marginsides} 0;
    background-color: #EBEBEB;
    border-bottom: solid 2px white;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-bottom: 50px;
    &:nth-of-type(4) {
        margin-top: 200px;
    }
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
        border-bottom: ${({language}) => language == "Eng" ? "solid black 1px" : "none"};
    }
    &:nth-of-type(2) {
        border-bottom: ${({language}) => language == "Ukr" ? "solid black 1px" : "none"};
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
    background-color: lightgrey;
    border: none;
`

const Word = styled.div`
    user-select: none;
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: solid lightgrey 2px;
`

const GenericButton = styled.button`
    width: 150px;
    height: 35px;
    background-color: transparent;
    border: 2px solid ${colors.greyFrame};
    color: black;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        font-size: 0.76rem;
        border-width: 3px;
    }
    &:active {
        transform: translate(1px, 1px);
    }
`

const LargeButton = styled(GenericButton)`
    &:nth-of-type(1) {
        border: ${({thousand}) => thousand=="First Thousand" ? `${colors.greyBoldFrame} solid 3.5px` : ""}
    }
    &:nth-of-type(2) {
        border: ${({thousand}) => thousand=="Second Thousand" ? `${colors.greyBoldFrame} solid 3.5px` : ""}
    }
`

const NumberButtonWrapper = styled.div`
    padding: 20px 0;
    display: flex;
    flex: 1;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-bottom: solid lightgrey 2px;

`

const TopButton = styled(GenericButton)`
    width: 100px;
    &:nth-of-type(${({topNumber}) => topNumber ? topNumber : "1"}) {
        border: ${colors.greyBoldFrame} solid 3.5px;
    }
    background-color: ${({color}) => color==colors.green ? color : ""};
`

const BottomButton = styled(GenericButton)`
    width: 100px;
    &:nth-of-type(${({bottomNumber}) => bottomNumber ? bottomNumber : "1"}) {
        border: ${colors.greyBoldFrame} solid 3.5px;
    }
    background-color: ${({color}) => color==colors.green ? color : ""};
`

const MarkButton = styled(GenericButton)`

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

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const LineCircleTextWrapper = styled.div`
    position: relative;
    padding: 0 7vw;
    display: flex;
    justify-content: center;
    gap: 5vw;
`

const CircleTextWrapper = styled.div`
    position: relative;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    &:nth-of-type(2) {
        top: 40px;
    }
    z-index: 20;
`

const Circle = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 200px;
    border: solid #B5B5B5 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: bold;
    background-color: #EBEBEB;
`

const Line = styled.div`
    position: absolute;
    width: 100%;
    height: 80px;
    border-bottom: solid #B5B5B5 3px;
    z-index: 10;
`

const CircleHeading = styled.div`
    margin: 20px 0;
    font-size: 1.6rem;
    font-weight: bold;
`

const CircleText = styled(MainText)`
    padding: 0;
`



export { Wrapper, Header, HeaderText, Title, MainText, FramesWrapper, Frame, LanguageButtonsWrapper, LanguageButton, Input, Word, WordSpan, TranslatSpan, LargeButtonsWrapper,LargeButton, NumberButtonWrapper, TopButton, BottomButton, MarkButton, Mark, LargeCircle, MediumCircle, SmallCircle, ImageWrapper, Image, LineCircleTextWrapper, CircleTextWrapper, Circle, Line, CircleHeading,CircleText  }
