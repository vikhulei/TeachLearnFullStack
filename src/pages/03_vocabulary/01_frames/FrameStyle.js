import styled, { css } from "styled-components";
import { GenericButton } from "../VocabularyStyle"
import { colors } from "../../../components/01_config/Colors";
import { MainFrame, MainInput } from "../../../components/01_config/MainStyles";

const FramesWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    gap: 7vw;
    z-index: 20;
    opacity: ${({ startTestMode, listOfWordsMode }) => startTestMode || listOfWordsMode ? "0.4" : "1"};
    @media(max-width: 1200px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`

const Frame = styled(MainFrame)`
    width: 40vw;
    max-width: 480px;
    height: 550px;
    padding: 15px 30px 40px;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    &:last-of-type {
       padding: 0px 0px 0px;
       gap: 0;
       justify-items: stretch;
    }
    @media(max-width: 1200px) {
        width: 90vw;
        max-width: 480px;
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

const LanguageButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    margin: 0 auto 10px;
    gap: 50px;
    // margin-bottom: 10px;
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
        border-bottom: ${({ language }) => language === "Eng" ? "solid black 1px" : "none"};
    }
    &:nth-of-type(2) {
        border-bottom: ${({ language }) => language === "Ukr" ? "solid black 1px" : "none"};
    }
    &:hover {
        font-weight: 600;
        border-width: 2px;
    }
`

const InputWordWrapper = styled.div`
    display: flex;
    @media(max-width: 1200px) {
        flex-direction: column;
    }
`

const WordWrapper = styled.div`
    display: flex;
`

const Input = styled(MainInput)`
    margin-right: 25px;
`

const Word = styled.div`
    position: relative;
    user-select: none;
    font-weight: 600;
    font-size: 1.1rem;
    display: flex;
    align-items: start;
    @media(max-width: 1200px) {
        margin 0 auto;
        margin-top: 15px;
    }

`

const WordCheck = styled(Word)`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    text-align: left;
    height: 20px;
`

const WordSpan = styled.div`
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
    padding: 20px 40px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
    border-bottom: solid lightgrey 2px;
    @media(max-width: 1200px) {
        padding: 20px 5px;
    }
`

const LargeButton = styled(GenericButton)`
    // background-color: red;
    &:nth-of-type(1) {
        border: ${({ thousand }) => thousand === "First Thousand" ? `${colors.greyBoldFrame} solid 4px` : ""}
    }
    &:nth-of-type(2) {
        border: ${({ thousand }) => thousand === "Second Thousand" ? `${colors.greyBoldFrame} solid 4px` : ""}
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
    background-color: ${({ color }) => color === colors.green ? color : ""};
`

const BottomButton = styled(GenericButton)`
    width: 100px;
    &:nth-of-type(${({ bottomNumber }) => bottomNumber ? bottomNumber : "1"}) {
        border: ${colors.greyBoldFrame} solid 4px;
    }
    background-color: ${({ color }) => color === colors.green ? color : ""};
`

const PercentButton = styled.div`
    position: relative;
    width: 100px;
    height: 35px;
    border: 2px solid ${colors.greyFrame};
    padding-left: 0;
    font-size: 0.75rem;
    font-weight: 600;
    display: flex;
`

const ProgressBar = styled.div`
    position: absolute;
    height: 100%;
    width: ${({percent}) => percent ? `${percent}%` : "0%"};
    background-color: ${colors.green};
`

const Percent = styled.div`
    position: relative;
    text-align: center;
    margin: auto;
`

export { FramesWrapper, Frame, CheckButton, CheckButtonFrame, LanguageButtonsWrapper, LanguageButton, InputWordWrapper, WordWrapper, Input, Word, WordCheck, WordSpan, WordSpanCheck, TranslatSpan, LargeButtonsWrapper, LargeButton, NumberButtonWrapper, TopButton, BottomButton, PercentButton, ProgressBar, Percent }