import styled from "styled-components";
// import { MainCorrect, MainFrame, MainFrameWrapper, MainHeading, MainHeadingCapital, MainSectionWrapper, MainText } from "../../../../components/01_config/MainStyles";
import { colors } from "../../../../../components/01_config/Colors";
import { MainCorrect, MainFrame, MainFrameWrapper, MainHeading, MainHeadingCapital, MainSectionWrapper, MainText } from "../../../../../components/01_config/MainStyles";

const Wrapper = styled(MainSectionWrapper)`
`

const HeadingSection = styled(MainHeading)`
    text-align: center;
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

const StoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const Text = styled(MainText)`

`

const Correct = styled(MainCorrect)`
    color: red;
    font-style: italic;
    font-size: 1rem;
    line-height: 1;
`


export { FrameWrapper, Frame, FrameHeading, StoryWrapper, Text, Correct }