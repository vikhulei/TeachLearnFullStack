import { useState } from "react"
import {  FrameWrapper, Frame, FrameHeading, StoryWrapper, Text, Correct } from "./StoryStyle"
import { StoryData } from "./StoryData"

const Story = () => {
  const [storyData, setStoryData] = useState(
    StoryData.filter(val => val.lesson === 1)
  )
  
  return (

    <FrameWrapper>
    <Frame>
        <FrameHeading>Story</FrameHeading>
        {storyData.map((value, index) => (
            <StoryWrapper key={index}>
                <Text>{value.story}</Text>
                <Correct style={{display: value.display}}>
                    {value.translation}
                </Correct>
            
            </StoryWrapper>
        ))}
    </Frame>

</FrameWrapper>
  )
}

export default Story