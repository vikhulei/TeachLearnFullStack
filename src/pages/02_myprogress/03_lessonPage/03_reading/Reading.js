import { WrapperSection, HeadingSection, FrameWrapper, Frame, Text } from "../LessonStyle"
import { ReadingText } from "../00_exercises/01_reading_texts/ReadingTexts"
import { SentenceWrapper, Question, ReadingInput, Correct } from "./ReadingStyle"
import { useState } from "react"
import { RightFrameWrapper, Image, FrameReadingLeft, FrameReadingRight, TextReading } from "./ReadingStyle"
import { MainFrameWrapper } from "../../../../components/01_config/MainStyles"
import { colors } from "../../../../components/01_config/Colors"


const Reading = () => {
    const [readingText, setReadingText] = useState(ReadingText.filter(value => value.lesson === 2))

    // const clickQuestion = (e) => {
    //     setReadingText(readingText.map(val =>
    //         val.index === Number(e.currentTarget.id) ? { ...val, lesson: val.lesson === "2" ? "1" : "2" } : val
    //     ))
    //     console.log(index)
    // }

    const fillInput = (e) => {
        console.log(readingText[0].questions[e.currentTarget.id].input)
        // console.log(e.currentTarget.value)
        let newReadingText = [...readingText]
        newReadingText[0].questions[e.currentTarget.id].input = e.currentTarget.value
        setReadingText(newReadingText)
    }

    const clickMe = (e) => {
        console.log(readingText[0].questions[e.currentTarget.id].answer)
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
                            <SentenceWrapper>
                                <Question key={index} id={index}>{value.question}</Question>
                                <ReadingInput
                                    style={{ color: value.input === value.correct ? `${colors.greenWord}` : "" }}
                                    value={value.input}
                                    id={index}
                                    onInput={fillInput}
                                    onClick={fillInput}
                                />
                                <Correct style={{ visibility: value.visibility }}>&nbsp;{value.correct}</Correct>
                            </SentenceWrapper>
                        ))}
                    </FrameReadingRight>
                </RightFrameWrapper>

            </MainFrameWrapper>

            {/* {readingText.map((value, index) => (
                <MainFrameWrapper key={value.id}>
                    <FrameReadingLeft onClick={() => clickQuestion(index)}>
                        <TextReading>{value.text}</TextReading>
                    </FrameReadingLeft>
                    <RightFrameWrapper>
                        <FrameReadingRight>
                            <Image src={value.image}/>
                        </FrameReadingRight>
                        <FrameReadingRight>
                            {value.questions.map((val, ind) => (
                                <SentenceWrapper>
                                    <Question key={ind}>{val.question}</Question>
                                    <ReadingInput value={val.answer} />
                                    <Correct style={{ visibility: val.visibility }}>&nbsp;{val.correct}</Correct>
                                </SentenceWrapper>
                            ))}
                        </FrameReadingRight>
                    </RightFrameWrapper>

                </MainFrameWrapper>
            ))} */}
        </WrapperSection>
    )
}

export default Reading

