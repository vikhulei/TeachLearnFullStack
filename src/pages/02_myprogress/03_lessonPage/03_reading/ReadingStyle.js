import styled from "styled-components";
import { Text } from "../LessonStyle";
import { MainFrame } from "../../../../components/01_config/MainStyles";


const FrameReadingLeft = styled(MainFrame)`
    margin: 0;
    min-height: 100%;
    width: 400px;
`

const FrameReadingRight = styled(MainFrame)`
    margin: 0;
    padding: 20px;
    width: 400px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
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
    height: 15px;
    max-width: 300px;
    border: 0;
    border-bottom: dashed 2px black;
    font-size: 1.1rem;
    font-style: italic;
    outline: none;
`

const Correct = styled.div`
    color: red;
    font-size: 1rem;
    line-height: 1;
`

export { FrameReadingLeft, FrameReadingRight, RightFrameWrapper, Image, TextReading, SentenceWrapper, Question, Correct, ReadingInput }