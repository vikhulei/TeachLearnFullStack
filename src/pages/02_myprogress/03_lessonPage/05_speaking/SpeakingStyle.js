import styled from "styled-components";
import { MainCorrect, MainDashedInput, MainFrame, MainFrameWrapper, MainHeading, MainHeadingCapital, MainQuestion, MainSectionWrapper, MainSentenceWrapper } from "../../../../components/01_config/MainStyles";
import { colors } from "../../../../components/01_config/Colors";

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


export { Wrapper, HeadingSection, TopicWrapper, TopicLabel, Topic }