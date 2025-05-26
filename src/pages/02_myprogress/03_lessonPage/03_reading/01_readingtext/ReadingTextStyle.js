import styled from "styled-components";
import { MainCorrect, MainDashedInput, MainFrame, MainFrameImage, MainFrameWrapper, MainQuestion, MainSentenceWrapper } from "../../../../../components/01_config/MainStyles";

const FrameWrapper = styled(MainFrameWrapper)`
`

const FrameReadingLeft = styled(MainFrame)`
    margin: 0;
    min-height: 100%;
    width: 400px;
`

const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    // background-color: red;
`
const FrameReadingRight = styled(MainFrameImage)`
`

const RightFrameWrapper = styled.div`
    width: 400px;
    max-height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const Image = styled.img`
    height: 300px;
    object-fit: cover;
    width: 100%;
    // margin: 15px;
    // margin-right: 15px;
`

const Text = styled.div`
    font-size: 1.4rem;
    text-wrap: nowrap;
    line-height: 1.6;
    -webkit-tap-highlight-color: transparent;
`

const TextReading = styled.div`
    height: 100%;
    white-space: pre-wrap;
    font-size: 1.2rem;
    line-height: 2;
    -webkit-tap-highlight-color: transparent;
`

const SentenceWrapper = styled(MainSentenceWrapper)`
    text-align: center;
`

const Question = styled(MainQuestion)`
    white-space: pre-wrap;
`

const ReadingInput = styled(MainDashedInput)`
    margin: 0 auto;
`

const Correct = styled(MainCorrect)`
    color: red;
    font-size: 1rem;
    line-height: 1;
`

export { FrameWrapper, FrameReadingLeft, FrameReadingRight, RightFrameWrapper, ImageWrapper, Image, TextReading, SentenceWrapper, Question, Correct, ReadingInput }