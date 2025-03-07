import { Wrapper, Header, Heading, SubheadingCapital, VocabularyWrapper, Word } from "./LessonStyle"
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
            <VocabularyWrapper>
            {TwoThousand.filter(val => val.id <= 50 ).map((value, index) => (
                <Word key={index}>
                    {value.word}
                </Word>
            ))}
            </VocabularyWrapper>
            <SubheadingCapital>
                Grammar
            </SubheadingCapital>
            <SubheadingCapital>
                Reading
            </SubheadingCapital>
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