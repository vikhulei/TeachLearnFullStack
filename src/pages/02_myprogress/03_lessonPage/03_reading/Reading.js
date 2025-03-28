import { WrapperSection, HeadingSection, FrameWrapper, Frame, Text } from "../LessonStyle"
import { ReadingText } from "../00_exercises/01_reading_texts/ReadingTexts"
import { useState } from "react"
import { RightFrameWrapper, Image, FrameReadingLeft, FrameReadingRight, TextReading } from "./ReadingStyle"
import { MainFrameWrapper } from "../../../../components/01_config/MainStyles"

const Reading = () => {
    const [readingText, setReadingText] = useState(ReadingText.filter(value => value.lesson === 1))
    return (
        <WrapperSection>
            <HeadingSection>
                Reading
            </HeadingSection>

            {readingText.map((value, index) => (
                <MainFrameWrapper key={value.id}>
                    <FrameReadingLeft>
                        <TextReading>{value.text}</TextReading>
                    </FrameReadingLeft>

                    <RightFrameWrapper>
                        <FrameReadingRight>
                            <Image src={value.image} />
                        </FrameReadingRight>
                        <FrameReadingRight onClick={() => console.log(value.description)}>
                            {value.description.map((val, ind) => (
                                <div key={ind} >
                                    <TextReading>{val.question}</TextReading>
                                </div>
                            ))}
                        </FrameReadingRight>
                    </RightFrameWrapper>

                </MainFrameWrapper>
            ))}
        </WrapperSection>
    )
}

export default Reading

