import styled from "styled-components";
import { Text } from "../LessonStyle";
import { MainCorrect, MainFrame, MainFrameImage } from "../../../../components/01_config/MainStyles";


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

const SentenceWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    max-width: 400px;
    // gap: 1px;
    line-height: 0.7;
`

const Question = styled.div`
    font-size: 1.1rem;
    text-wrap: nowrap;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
`

const ReadingInput = styled.input`
    background-color: rgba(0, 0, 0, 0);
    height: 20px;
    max-width: 300px;
    border: 0;
    border-bottom: dashed 2px black;
    font-size: 1.1rem;
    font-style: italic;
    line-height: 0.5;
    outline: none;
`

const Correct = styled(MainCorrect)`
    color: red;
    font-size: 1rem;
    line-height: 1;
`

export { FrameReadingLeft, FrameReadingRight, RightFrameWrapper, Image, TextReading, SentenceWrapper, Question, Correct, ReadingInput }