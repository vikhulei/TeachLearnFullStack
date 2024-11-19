import { Wrapper, ColorLayer,  TopWrapper, TopButton, BottomWrapper, LeftWrapper, LeftButton, CentralWrapper, InputsWrapper, Input, WordsWrapper, Word, RightWrapper, LargeButtonsWrapper, LargeButton, MarksWrapper, StudentWrapper, TutorWrapper, MarksText, MarksPercent, ImageWrapper, Image } from "./VocabularyStyle"

const Vocabulary = () => {
    return (
        <Wrapper>
            <ColorLayer />
            <TopWrapper>
                <TopButton>510</TopButton>
            </TopWrapper>
            <BottomWrapper>
                <LeftWrapper>
                    <LeftButton>100</LeftButton>
                </LeftWrapper>
                <CentralWrapper>
                    <InputsWrapper>
                        <Input />
                    </InputsWrapper>
                    <WordsWrapper>
                        <Word>World</Word>
                    </WordsWrapper>
                </CentralWrapper>
                <RightWrapper>
                    <LargeButtonsWrapper>
                        <LargeButton>First Thousand</LargeButton>
                        <LargeButton>Ukrainian-English</LargeButton>
                    </LargeButtonsWrapper>
                    <MarksWrapper>
                        <StudentWrapper>
                        <MarksText>Student's MArk</MarksText>
                        <MarksPercent>72%</MarksPercent>
                        </StudentWrapper>
                        <TutorWrapper>
                        <MarksText>Tutor's MArk</MarksText>
                        <MarksPercent>64%</MarksPercent>
                        </TutorWrapper>
                    </MarksWrapper>
                </RightWrapper>
            </BottomWrapper>

        </Wrapper>
    )
}

export default Vocabulary