import styled from "styled-components";
import { MainFrame, MainHeading, SectionWrapper } from "../../../../components/01_config/MainStyles";
import { colors } from "../../../../components/01_config/Colors";

const Wrapper = styled(SectionWrapper)`
`

const Heading = styled(MainHeading)`
    text-align: center;
`

const Frame = styled(MainFrame)`
    width: 60%;
    max-width: 90vw;
    align-items: end;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    background-color: rgba(0,0,0,0);
    @media(max-width: 800px) {
        padding: 5px;
        width: 90vw;
    }
`

const Word = styled.div`
    position: relative;
    font-size: 1.3rem;
    cursor:pointer;
    &:nth-of-type(12n+2) {
        font-size: 1.8rem;
        font-weight: bold;
        color: ${colors.myprogress};
    }
    &:nth-of-type(6n+5) {
        font-size: 1.8rem;
        font-style: italic;
    }
    }
`

const EngWord = styled.div`
    position: relative;
`

const UkrWord = styled.div`
    position: relative;
`

export { Wrapper, Heading, Frame, Word, EngWord, UkrWord }