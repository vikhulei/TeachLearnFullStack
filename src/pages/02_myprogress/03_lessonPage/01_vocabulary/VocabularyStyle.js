import styled from "styled-components";
import { MainFrame, MainHeading } from "../../../../components/01_config/MainStyles";
import { colors } from "../../../../components/01_config/Colors";

const Wrapper = styled.div`
`

const Heading = styled(MainHeading)`
    text-align: center;
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

const Word = styled.span`
    font-size: 1.3rem;
    &:after {
        // content: ",";
        // white-space: pre;
    }
    &:nth-of-type(14n+2) {
        font-size: 1.8rem;
        font-weight: bold;
        color: ${colors.myprogress};
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

export { Wrapper, Heading, Frame, Word }