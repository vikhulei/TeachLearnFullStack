import styled from "styled-components";
import { MainCorrect, MainDashedInput, MainFrame, MainFrameWrapper, MainHeading, MainQuestion, MainSectionWrapper, MainSentenceWrapper } from "../../../../components/01_config/MainStyles";

const Wrapper = styled(MainSectionWrapper)`
`

const HeadingSection = styled(MainHeading)`
    text-align: center;
`

const FrameWrapper = styled(MainFrameWrapper)`

`

const Frame = styled(MainFrame)`

`

const Image = styled.img`

`

const SentenceWrapper = styled(MainSentenceWrapper)`

`

const Question = styled(MainQuestion)`

`

const ListeningInput = styled(MainDashedInput)`

`

const Correct = styled(MainCorrect)`
    color: red;
    font-size: 1rem;
    line-height: 1;
`


export { Wrapper, HeadingSection, FrameWrapper, Frame, Image, SentenceWrapper, Question, ListeningInput, Correct }