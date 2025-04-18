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
    display: flex;
    flex-direction: column;
`

const ImageAudioWrapper = styled.div`
`

const Image = styled.img`
    height: 200px;
    width: 200px;
    object-fit: cover;
    margin: 0 auto;
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


export { Wrapper, HeadingSection, FrameWrapper, Frame, ImageAudioWrapper, Image, SentenceWrapper, Question, ListeningInput, Correct }