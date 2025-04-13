import styled from "styled-components";
import { MainFrame, MainHeading, MainSectionWrapper } from "../../../../components/01_config/MainStyles";
import { colors } from "../../../../components/01_config/Colors";

const Wrapper = styled(MainSectionWrapper)`

`

const Heading = styled(MainHeading)`
    text-align: center;
`

const Frame = styled(MainFrame)`
    // width: 60%;
`

const Word = styled.div`
    position: relative;
    height: 45px;
    cursor: pointer;
    user-select: none;
    font-size: 1.3rem;
    -webkit-tap-highlight-color: transparent;
    &:nth-of-type(12n+2) {
        font-size: 1.8rem;
        font-weight: bold;
        color: ${colors.myprogress};
    }
    &:nth-of-type(6n+5) {
        font-size: 1.8rem;
        font-style: italic;
    }
`

const EngWord = styled.div`
    position: relative;
`

const UkrWord = styled.div`
    position: relative;
    width: 2px;
    color: red;
    overflow: visible;
        &:nth-of-type(12n+2) {
        font-size: 1.3rem;
        font-weight: normal;
        color: red;
    }
    &:nth-of-type(6n+5) {
        font-size: 1.3rem;
        font-style: normal;
    }
`


export { Wrapper, Heading, Frame, Word, EngWord, UkrWord }