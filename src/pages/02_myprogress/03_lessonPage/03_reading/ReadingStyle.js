import styled from "styled-components";
import { Frame, Text } from "../LessonStyle";
import { MainBodyText, MainFrame } from "../../../../components/01_config/MainStyles";

const FrameReadingLeft = styled(MainFrame)`
    margin: 0;
    height: 100%;
    width: 400px;
`

const FrameReadingRight = styled(MainFrame)`
    margin: 0;
    padding: 0;
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
    // background-color: red;
`

const Image = styled.img`
    height: 400px;
    // max-width: 300px;
    object-fit: cover;
    margin: 15px;
    
`

const TextReading = styled(Text)`
    white-space: pre-wrap;
    font-size: 1.2rem;
    line-height: 1.5;
`

export { FrameReadingLeft, FrameReadingRight, RightFrameWrapper, Image, TextReading }