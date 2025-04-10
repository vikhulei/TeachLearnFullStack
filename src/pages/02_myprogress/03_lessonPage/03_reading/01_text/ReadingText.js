import { } from "./ReadingTextStyle"

const ReadingText = () => {
    return (
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
    )
}

export default ReadingText