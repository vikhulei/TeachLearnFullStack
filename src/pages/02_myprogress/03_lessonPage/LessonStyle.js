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

const VocabularyWrapper = styled(MainFrame)`
    display: flex;
    margin: 0 auto;
    padding: 50px 50px 50px;
    max-width: 70%;
    flex-direction: row;
    align-items: end;
    gap: 15px;
    // justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 20px;
    &:last-of-type {
        padding: 50px;
        gap: 0;
        // justify-items: stretch;
    }
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

export { Wrapper, Header, Heading, SubheadingCapital, VocabularyWrapper, Word }