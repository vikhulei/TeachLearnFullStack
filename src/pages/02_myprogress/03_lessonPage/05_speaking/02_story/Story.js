import { useState } from "react"
import { FrameWrapper, Frame, FrameHeading, StoryWrapper, Text, Correct, TranslateLink } from "./StoryStyle"
import { StoryData } from "./StoryData"

const Story = () => {
  const [storyData, setStoryData] = useState(
    StoryData.filter(val => val.lesson === 1)
  )

  const clickTranslate = (e) => {
    e.preventDefault();
    let prevStoryData = [...storyData]
    prevStoryData[0].display = prevStoryData[0].display === "none" ? "block" : "none"
    setStoryData(prevStoryData)
  }

  return (

    <FrameWrapper>
      <Frame>
        <FrameHeading>Story</FrameHeading>
        {/* <StoryWrapper> */}
          <Text>{storyData[0].story}</Text>
          <TranslateLink onClick={clickTranslate}>Переклад</TranslateLink>
          <Correct style={{ display: storyData[0].display }}>
            {storyData[0].translation}
          </Correct>
        {/* </StoryWrapper> */}
      </Frame>

    </FrameWrapper>
  )
}

export default Story