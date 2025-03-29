import { WrapperSection, HeadingSection, FrameWrapper, Frame, Text } from "../LessonStyle"
import { ReadingText } from "../00_exercises/01_reading_texts/ReadingTexts"
import { SentenceWrapper, Question, ReadingInput, Correct } from "./ReadingStyle"
import { useState } from "react"
import { RightFrameWrapper, Image, FrameReadingLeft, FrameReadingRight, TextReading } from "./ReadingStyle"
import { MainFrameWrapper } from "../../../../components/01_config/MainStyles"
import { colors } from "../../../../components/01_config/Colors"


const Reading = () => {
    const [readingText, setReadingText] = useState(ReadingText.filter(value => value.lesson === 3))

    const clickQuestion = (e) => {
        e.preventDefault();
        let currentId = Number(e.currentTarget.id) 
        setReadingText((prevReadingText) => prevReadingText.map(value =>
            ({ ...value, questions: value.questions.map((val, ind) => ind === currentId ? {...val, visibility: val.visibility === "visible" ? "hidden" : "visible"} : val) })
        ))
    }

    const fillInput = (e) => {
        e.preventDefault();
        let newReadingText = [...readingText]
        newReadingText[0].questions[e.currentTarget.id].input = e.currentTarget.value
        setReadingText(newReadingText)
    }

    return (
        <WrapperSection>
            <HeadingSection>
                Reading
            </HeadingSection>
            <MainFrameWrapper>
                <FrameReadingLeft>
                    <TextReading>{readingText[0].text}</TextReading>
                </FrameReadingLeft>
                <RightFrameWrapper>
                    <FrameReadingRight>
                        <Image src={readingText[0].image} />
                    </FrameReadingRight>
                    <FrameReadingRight>
                        {readingText[0].questions.map((value, index) => (
                            <SentenceWrapper key={index}>
                                <Question
                                    id={index}
                                    onClick={clickQuestion}
                                >
                                    {value.question}
                                </Question>
                                &nbsp;
                                <ReadingInput
                                    style={{ color: value.input === value.answer ? `${colors.greenWord}` : "" }}
                                    value={value.input}
                                    id={index}
                                    onInput={fillInput}
                                />
                                <Correct style={{ visibility: value.visibility }}>{value.answer}</Correct>
                            </SentenceWrapper>
                        ))}
                    </FrameReadingRight>
                </RightFrameWrapper>

            </MainFrameWrapper>
        </WrapperSection>
    )
}

export default Reading

