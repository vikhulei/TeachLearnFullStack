import styled from "styled-components";
import { MainFrameWrapper, MainHeading, MainSectionWrapper } from "../../../../components/01_config/MainStyles";


const Wrapper = styled(MainSectionWrapper)`
`

const HeadingSection = styled(MainHeading)`
    text-align: center;
`

const TopicWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const TopicLabel = styled.div`
    font-weight: bold;
`

const Topic = styled.div`
    text-decoration: underline
`

const FrameWrapper = styled(MainFrameWrapper)`

`


export { Wrapper, HeadingSection, TopicWrapper, TopicLabel, Topic, FrameWrapper }