import { WrapperSection, HeadingSection, FrameWrapper, Frame, Text } from "../LessonStyle"
import { ReadingText } from "../00_exercises/01_reading_texts/ReadingTexts"
import { useState } from "react"
import { RightFrameWrapper, Image, LeftFrameWrapper } from "./ReadingStyle"

const Reading = () => {
    const [readingText, setReadingText] = useState(ReadingText.filter(value => value.lesson === 1))
  return (
    <WrapperSection>
    <HeadingSection>
        Reading
    </HeadingSection>
    <FrameWrapper>
        
    {readingText.map((value, index) => (
         <FrameWrapper key={value.id}>
            <LeftFrameWrapper>
                <Text>{value.text}</Text>
            </LeftFrameWrapper>
            <Frame>
                <RightFrameWrapper>
                    <Image src={value.image} />
                </RightFrameWrapper>
                <RightFrameWrapper>
                    <Text>{value.description}</Text>
                </RightFrameWrapper>
            </Frame>
             {/* <img src={value.image} onClick={() => alert(value.description)}/> */}
         </FrameWrapper>
     ))}
    </FrameWrapper>
</WrapperSection>
  )
}

export default Reading

