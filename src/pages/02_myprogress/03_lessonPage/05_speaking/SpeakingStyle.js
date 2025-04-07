import styled from "styled-components";
import { MainHeading, MainSectionWrapper } from "../../../../components/01_config/MainStyles";


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


export { Wrapper, HeadingSection, TopicWrapper, TopicLabel, Topic }