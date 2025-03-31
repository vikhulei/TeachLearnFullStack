import styled from "styled-components";
import { Text } from "../LessonStyle";
import { MainCorrect, MainDashedInput, MainFrame, MainFrameImage, MainQuestion, MainSentenceWrapper } from "../../../../components/01_config/MainStyles";


const FrameReadingLeft = styled(MainFrame)`
    margin: 0;
    min-height: 100%;
    width: 400px;
`

const FrameReadingRight = styled(MainFrameImage)`
`

const RightFrameWrapper = styled.div`
    width: 400px;
    max-height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Image = styled.img`
    height: 300px;
    object-fit: cover;
    margin: 15px;
`

const TextReading = styled(Text)`
    height: 100%;
    white-space: pre-wrap;
    font-size: 1.2rem;
    line-height: 1.5;
`

const SentenceWrapper = styled(MainSentenceWrapper)`
`

const Question = styled(MainQuestion)`
`

const ReadingInput = styled(MainDashedInput)`
`

const Correct = styled(MainCorrect)`
    color: red;
    font-size: 1rem;
    line-height: 1;
`

export { FrameReadingLeft, FrameReadingRight, RightFrameWrapper, Image, TextReading, SentenceWrapper, Question, Correct, ReadingInput }