import styled from "styled-components";
import { MainCorrect, MainFrame, MainFrameWrapper, MainHeadingCapital, MainQuestion, MainSentenceWrapper } from "../../../../../components/01_config/MainStyles";
import { colors } from "../../../../../components/01_config/Colors";


const FrameWrapper = styled(MainFrameWrapper)`

`

const Frame = styled(MainFrame)`
    display: flex;
    flex-direction: column;
`

const FrameHeading = styled(MainHeadingCapital)`
    margin: 0 auto;
    color: ${colors.myprogress};
    color: #044AEF;
    font-weight: bold;
    font-size: 1.4rem;
`


const SentenceWrapper = styled(MainSentenceWrapper)`

`

const DialogName = styled.div`
    font-weight: bold;
`

const DialogLine = styled(MainQuestion)`
    font-style: italic;
`


const Correct = styled(MainCorrect)`
    color: red;
    font-size: 1rem;
    line-height: 1;
`


export { FrameWrapper, Frame, FrameHeading, SentenceWrapper, DialogName, DialogLine, Correct }