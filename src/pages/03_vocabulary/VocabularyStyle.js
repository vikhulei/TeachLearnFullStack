import styled, { css } from "styled-components";
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

const Header = styled.div`
    position: relative;
    padding: 50px;
    background-color: ${colors.mainDark};
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
    z-index: 20;
`

const MainText = styled.div`
    position: relative;
    padding: 0 10vw;
    font-size: 1.1rem;
    line-height: 1.7;
    z-index: 20;
`

const CheckWordWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 70px 70px 30px;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 3px black solid;
    z-index: 30;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 2rem;
    z-index: 99;
`

const TestWordWrapper = styled(CheckWordWrapper)`
    width: 300px;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
    padding-left: 30px;
    padding-right: 30px;
`

const TestedWord = styled.div`
    left: 0;
    margin: 0;
    width: 100%;
    cursor: pointer;
    text-align: center;
    font-size: 2rem;
    user-select: none;
`

const TestButtonsWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    display: flex;
    gap: 35px;
    z-index: 30;
`

const TestButton = styled.button`
    width: 150px;
    height: 45px;
    border: 2px solid black;
    box-shadow: 0px 0px 5px black;
    cursor: pointer;
    &:active {
        transform: translate(2px, 1px);
    }
`

const CreateButton = styled(TestButton)`
    height: 35px;
    margin: 20px auto 0px;
    padding: 0 30px;
    width: fit-content;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: ${colors.mainDark};

`

const FramesWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    gap: 7vw;
    z-index: 20;
    opacity: ${({ startTestMode, checkWordsMode }) => startTestMode || checkWordsMode ? "0.4" : "1"};
`

const Frame = styled.div`
    box-sizing: border-box;
    width: 500px;
    padding: 15px 30px 40px;
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
        border-bottom: ${({ language }) => language == "Eng" ? "solid black 1px" : "none"};
    }
    &:nth-of-type(2) {
        border-bottom: ${({ language }) => language == "Ukr" ? "solid black 1px" : "none"};
    }
    &:hover {
        font-weight: 600;
        border-width: 2px;
    }
`

const CheckButton = styled(GenericButton)`
    width: 24px;
    height: 24px;
    margin-right: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const disabledCheckButton = css`
    pointer-events: none;
    border-width: 0px;
    &:hover {
        font-size: 0.75rem;
        border-width: 0px;
        cursor: initial;
    };
    &:active {
        transform: translate(0, 0);
    };
    background-color: #E3E3E3;
`

const CheckButtonFrame = styled(CheckButton)`
    background-color: ${({ correctStudent }) => correctStudent ? colors.green : ""}
    ${({ correctTutor }) => correctTutor ? disabledCheckButton : ""}
`

const BarTestWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 35px;
    background-color: ${colors.mainDark};
    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 2.5;
    color: white;
`

const ClosedButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 34px;
    height: 34px;
    padding: 0;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    z-index: 100;
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 0.9;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const Input = styled.input`
    position: relative;
    width: 150px;
    height: 24px;
    margin-right: 25px;
    background-color: lightgrey;
`

const Word = styled.div`
    user-select: none;
    font-weight: 600;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
`

const WordCheck = styled(Word)`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    text-align: left;
    height: 20px;
`

const WordSpan = styled.span`
    margin-right: 5px;
    cursor: pointer;
    &:hover {
        font-weight: 750;
    }
`

const WordSpanCheck = styled(WordSpan)`
    font-size: 1.3rem;
    cursor: default;
    flex: 1;
    &:hover {
        font-weight: 600;
    }
`

const TranslatSpan = styled.span`
    color: red;
    font-weight: 600;
        &:hover {
        font-weight: 750;
    }
`

const LargeButtonsWrapper = styled.div`
    box-sizing: content-box;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: solid lightgrey 2px;
`

const LargeButton = styled(GenericButton)`
    &:nth-of-type(1) {
        border: ${({ thousand }) => thousand == "First Thousand" ? `${colors.greyBoldFrame} solid 4px` : ""}
    }
    &:nth-of-type(2) {
        border: ${({ thousand }) => thousand == "Second Thousand" ? `${colors.greyBoldFrame} solid 4px` : ""}
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
    &:nth-of-type(${({ topNumber }) => topNumber ? topNumber : "1"}) {
        border: ${colors.greyBoldFrame} solid 4px;
    }
    background-color: ${({ color }) => color == colors.green ? color : ""};
`

const BottomButton = styled(GenericButton)`
    width: 100px;
    &:nth-of-type(${({ bottomNumber }) => bottomNumber ? bottomNumber : "1"}) {
        border: ${colors.greyBoldFrame} solid 4px;
    }
    background-color: ${({ color }) => color == colors.green ? color : ""};
`

const MarkButton = styled(GenericButton)`
    cursor: initial;
    border: none;
    &:hover {
        font-size: 0.75rem;
    }
    &:active {
        transform: translate(none);
    }
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





export { Wrapper, Header, HeaderText, Title, MainText, FramesWrapper, Frame, CheckWordWrapper, TestWordWrapper, TestButtonsWrapper, TestButton, CreateButton, LanguageButtonsWrapper, LanguageButton, Input, Word, WordCheck, WordSpan, WordSpanCheck, TranslatSpan, LargeButtonsWrapper, LargeButton, NumberButtonWrapper, TopButton, BottomButton, MarkButton, Mark, LargeCircle, MediumCircle, SmallCircle, ImageWrapper, Image, LineCircleTextWrapper, CircleTextWrapper, Circle, Line, CircleHeading, CircleText, CheckButton, CheckButtonFrame, BarTestWrapper, ClosedButton, TestedWord }
