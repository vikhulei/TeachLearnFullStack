import styled from "styled-components";
import { MainCorrect, MainFrame, MainFrameWrapper, MainHeadingCapital, MainQuestion, MainSentenceWrapper } from "../../../../../components/01_config/MainStyles";
import { colors } from "../../../../../components/01_config/Colors";


const FrameWrapper = styled(MainFrameWrapper)`

`

const Frame = styled(MainFrame)`
    flex-direction: column;
    gap: 30px;
    align-items: start;
    // max-width: 70vw;
    // width: 800px;
`

const FrameHeading = styled(MainHeadingCapital)`
    margin: 0 auto;
    color: ${colors.myprogress};
    color: #044AEF;
    font-weight: bold;
    font-size: 1.4rem;
`

const DialogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const SentenceWrapper = styled(MainSentenceWrapper)`
    // flex-direction: row;
    max-width: none;
    flex-wrap: wrap;
    line-height: 1;
`

const DialogName = styled.div`
    font-weight: bold;
`

const DialogLine = styled(MainQuestion)`
    font-style: italic;
    word-wrap: wrap;
    text-wrap: wrap;
`


const Correct = styled(MainCorrect)`
    display: block;
    line-height: 0.9;
`


export { FrameWrapper, Frame, FrameHeading, DialogWrapper, SentenceWrapper, DialogName, DialogLine, Correct }