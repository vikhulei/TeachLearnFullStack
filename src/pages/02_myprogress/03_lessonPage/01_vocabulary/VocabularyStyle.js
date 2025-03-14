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
    max-width: 80%;
    align-items: end;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    background-color: rgba(0,0,0,0);
`

const Word = styled.span`
    font-size: 1.3rem;
    &:nth-of-type(14n+2) {
        font-size: 1.8rem;
        font-weight: bold;
        color: ${colors.myprogress};
    }
    &:nth-of-type(8n+5) {
        font-size: 1.8rem;
        font-style: italic;
    }
    }
`

export { Wrapper, Heading, Frame, Word }