import { useEffect, useState } from "react"
import parse from 'html-react-parser'
import { FrameWrapper, FrameReadingLeft, FrameReadingRight, RightFrameWrapper, ImageWrapper, Image, TextReading, SentenceWrapper, Question, Correct, ReadingInput } from "./ReadingTextStyle"
import { ReadingTextData } from "./ReadingTextsData"
import { colors } from "../../../../../components/01_config/Colors"
import { useSelector } from "react-redux"

const ReadingText = () => {

    const currentLesson = useSelector(state => state.lesson.currentLesson)

    const [readingText, setReadingText] = useState(
        ReadingTextData.filter(value => value.lesson === currentLesson)
    )

    const clickQuestion = (e) => {
        e.preventDefault();
        let currentId = Number(e.currentTarget.id)
        setReadingText((prevReadingText) => prevReadingText.map(value =>
            ({ ...value, questions: value.questions.map((val, ind) => ind === currentId ? { ...val, visibility: val.visibility === "visible" ? "hidden" : "visible" } : val) })
        ))
    }

    const fillInput = (e) => {
        e.preventDefault();
        let newReadingText = [...readingText]
        newReadingText[0].questions[e.currentTarget.id].input = e.currentTarget.value
        setReadingText(newReadingText)
    }

    useEffect(() => {
        setReadingText(ReadingTextData.filter(value => value.lesson === currentLesson))
    }, [currentLesson])

    return (
        <FrameWrapper>
            <FrameReadingLeft>
                <TextReading>{parse(readingText[0].text)}</TextReading>
            </FrameReadingLeft>
            <RightFrameWrapper>
                <FrameReadingRight>
                    <ImageWrapper>
                        <Image src={readingText[0].image} />
                    </ImageWrapper>
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
        </FrameWrapper>
    )
}

export default ReadingText