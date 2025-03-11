import styled from "styled-components";
import { colors } from "../../../components/01_config/Colors";
import { MainWrapper, MainHeader, MainHeading, MainHeadingCapital, MainBodyText, MainFrame, } from "../../../components/01_config/MainStyles";

const Wrapper = styled(MainWrapper)`
    gap: 30px;
    margin-bottom: 100px;
`

const Header = styled(MainHeader)`

`

const Heading = styled(MainHeading)`
    text-align: center;
    // font-size: 2.5rem;
`

const SubheadingCapital = styled(MainHeading)`
    // color: ${colors.myprogress};
    text-align: center;
    // background-color: red;
    // font-size: 2rem;
`

const FrameWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
`

const Frame = styled(MainFrame)`
    height: fit-content;
    margin: 0 auto;
    padding: 20px;
    width: 60%;
    max-width: 80%;
    flex-direction: row;
    align-items: end;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    background-color: rgba(0,0,0,0);
`

const FrameGrammar = styled(Frame)`
    margin: 0;
`

const FrameBoldWord = styled(FrameGrammar)`
    background-color: grey;
`

const FrameFillIn = styled(FrameGrammar)`
    background-color: lightgrey;
`

const FrameModify = styled(FrameGrammar)`
    background-color: darkgrey;
`

const Word = styled.span`
    font-size: 1.3rem;
    &:after {
        // content: ",";
        // white-space: pre;
    }
    &:nth-of-type(14n+2) {
        font-size: 1.8rem;
        font-weight: bold;
        color: ${colors.grammar};
    }
    &:nth-of-type(8n+5) {
        font-size: 1.8rem;
        font-style: italic;
    }
    &:last-of-type {
        &:after {
        content: ""
    }
    }
`

const Image = styled.img`
    width: 400px;
`

export { Wrapper, Header, Heading, SubheadingCapital, FrameWrapper, Frame, FrameGrammar, FrameBoldWord, FrameFillIn, FrameModify, Word, Image }