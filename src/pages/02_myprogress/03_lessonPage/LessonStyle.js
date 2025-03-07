import styled from "styled-components";
import { colors } from "../../../components/01_config/Colors";
import { MainWrapper, MainHeader, MainHeading, MainHeadingCapital, MainBodyText, MainFrame, } from "../../../components/01_config/MainStyles";

const Wrapper = styled(MainWrapper)`
    gap: 30px;
`

const Header = styled(MainHeader)`

`

const Heading = styled(MainHeading)`
    text-align: center;
    // font-size: 2.5rem;
`

const SubheadingCapital = styled(MainHeadingCapital)`
    color: ${colors.myprogress};
    // font-size: 2rem;
`

const FrameWrapper = styled.div`
    display: flex;
    justify content: center;
    gap: 50px;
`

const Frame = styled(MainFrame)`
    margin: 0 auto;
    padding: 50px;
    // width: 80%;
    max-width: 80%;
    flex-direction: row;
    align-items: end;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    // background-color: red;
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

export { Wrapper, Header, Heading, SubheadingCapital, FrameWrapper, Frame, Word }