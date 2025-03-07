import { Wrapper, Header, Heading, SubheadingCapital, FrameWrapper, Frame, Word } from "./LessonStyle"
import { TwoThousand } from "../../../components/01_config/TwoThousand"

const lessonParts = ["Vocabulary", "Grammar", "Reading", "Listening", "Speaking"]

const Lesson = () => {
    return (
        <Wrapper>
            <Header>
                MY PROGRESS
            </Header>
            <Heading>
                Lesson 3
            </Heading>
            {/* 
            {lessonParts.map((value, index) => (
                <SubheadingCapital key={index}>
                    {value}
                </SubheadingCapital>
            ))} */}

            <SubheadingCapital>
                Vocabulary
            </SubheadingCapital>
            <Frame>
                {TwoThousand.filter(val => val.id <= 50).map((value, index) => (
                    <Word key={index}>
                        {value.word}
                    </Word>
                ))}
            </Frame>
            <SubheadingCapital>
                Grammar
            </SubheadingCapital>
            <FrameWrapper>
                <Frame>
                    THEME 1
                </Frame>
                <Frame>
                    THEME 1
                </Frame>
                </FrameWrapper>
            <SubheadingCapital>
                Reading
            </SubheadingCapital>
            <Frame>
                Text 1
            </Frame>
            <SubheadingCapital>
                Listening
            </SubheadingCapital>
            <SubheadingCapital>
                Speaking
            </SubheadingCapital>
        </Wrapper>
    )
}

export default Lesson