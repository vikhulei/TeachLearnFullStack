import styled from "styled-components";
import { MainCorrect, MainDashedInput, MainFrame, MainFrameWrapper, MainHeading, MainHeadingCapital, MainQuestion, MainSectionWrapper, MainSentenceWrapper } from "../../../../components/01_config/MainStyles";

const Wrapper = styled(MainSectionWrapper)`
`

const HeadingSection = styled(MainHeading)`
    text-align: center;
`

const TopicWrapper = styled.div`
    display: flex;
`

const TopicLabel = styled.div`
    font-weight: bold;
`

const Topic = styled.div`
    text-decoration: underline
`

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


export { Wrapper, HeadingSection, FrameWrapper, Frame, FrameHeading, SentenceWrapper, DialogName, DialogLine, Correct }