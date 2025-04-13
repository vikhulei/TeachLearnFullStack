import styled from "styled-components";
import { colors } from "../../../../../components/01_config/Colors";
import { MainCorrect, MainFrame, MainFrameWrapper, MainHeadingCapital,  MainText } from "../../../../../components/01_config/MainStyles";


const FrameWrapper = styled(MainFrameWrapper)`

`

const Frame = styled(MainFrame)`
    display: flex;
    flex-direction: column;
    // max-width: 70vw;
    // width: 800px;
    gap: 15px;
`

const FrameHeading = styled(MainHeadingCapital)`
    margin: 0 auto;
    color: ${colors.myprogress};
    color: #044AEF;
    font-weight: bold;
    font-size: 1.4rem;
`

const StoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const Text = styled(MainText)`
    height: 100%;
    white-space: pre-wrap;
    font-size: 1.2rem;
    line-height: 1.5;
`

const Correct = styled(MainCorrect)`
    color: red;
    font-style: italic;
    font-size: 1rem;
    line-height: 1.5;
`

const TranslateLink = styled.div`
    color: ${colors.myprogress};
    font-weight: bold;
    cursor: pointer;
`

export { FrameWrapper, Frame, FrameHeading, StoryWrapper, Text, Correct, TranslateLink }