import { useEffect, useState } from "react"
import { FrameWrapper, Frame, FrameHeading, StoryWrapper, Text, Correct, TranslateLink } from "./StoryStyle"
import { StoryData } from "./StoryData"
import { useSelector } from "react-redux"

const Story = () => {

  const currentLesson = useSelector(state => state.lesson.currentLesson)

  const [storyData, setStoryData] = useState(
    StoryData.filter(val => val.lesson === currentLesson)
  )

  const clickTranslate = (e) => {
    e.preventDefault();
    let prevStoryData = [...storyData]
    prevStoryData[0].display = prevStoryData[0].display === "none" ? "block" : "none"
    setStoryData(prevStoryData)
  }

  useEffect(() => {
    setStoryData(StoryData.filter(val => val.lesson === currentLesson))
  }, [currentLesson])

  return (

      <Frame>
        <FrameHeading>Story</FrameHeading>
          <Text>{storyData[0].story}</Text>
          <TranslateLink onClick={clickTranslate}>Переклад</TranslateLink>
          <Correct style={{ display: storyData[0].display }}>
            {storyData[0].translation}
          </Correct>
      </Frame>

  )
}

export default Story