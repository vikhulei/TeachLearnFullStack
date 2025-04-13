import { Wrapper, HeadingSection, TopicWrapper, TopicLabel, Topic, FrameWrapper } from "./SpeakingStyle"
import Dialog from "./01_dialog/Dialog"
import Story from "./02_story/Story"
import { TopicData } from "./TopicsData"

const Speaking = () => {
  return (
    <Wrapper>
      <HeadingSection>
        Speaking
      </HeadingSection>
      {TopicData.filter(val => val.lesson === 1).map((value, index) => (
        <TopicWrapper key={index}>
          <TopicLabel>Topic:&nbsp;</TopicLabel>
          <Topic>{value.topic}`</Topic>
        </TopicWrapper>
      ))}
      <FrameWrapper>
        <Dialog />
        <Story />
      </FrameWrapper>
    </Wrapper>
  )
}

export default Speaking