import styled from "styled-components";
import { Frame, Text } from "../LessonStyle";
import { MainBodyText, MainFrame, MainInput } from "../../../../components/01_config/MainStyles";

const FrameReadingLeft = styled(MainFrame)`
    margin: 0;
    height: 100%;
    width: 400px;
`

const FrameReadingRight = styled(MainFrame)`
    margin: 0;
    padding: 15px;
    width: 400px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`

const RightFrameWrapper = styled.div`
    width: 400px;
    max-height: 50%;
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
    white-space: pre-wrap;
    font-size: 1.2rem;
    line-height: 1.5;
`

const SentenceWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 400px;
    gap: 10px;
    line-height: 1;
`

const Question = styled.div`
    font-size: 1.2rem;
    text-wrap: nowrap;
    -webkit-tap-highlight-color: transparent;
`

const ReadingInput = styled.input`
    background-color: rgba(0, 0, 0, 0);
    height: 25px;
    max-width: 120px;
    border: 0;
    border-bottom: solid 1px black;
    font-size: 1.2rem;
    font-style: italic;
    text-align: center;
    outline: none;
`

const Correct = styled.div`
    // flex-basis: 100%;
    color: red;
    font-size: 1rem;
    line-height: 1.2;
`

export { FrameReadingLeft, FrameReadingRight, RightFrameWrapper, Image, TextReading, SentenceWrapper, Question, Correct, ReadingInput }