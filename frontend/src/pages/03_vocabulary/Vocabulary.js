import { Wrapper, ColorLayer,  TopWrapper, TopButton, BottomWrapper, LeftWrapper, LeftButton, CentralWrapper, InputsWrapper, Input, WordsWrapper, Word, RightWrapper, LargeButtonsWrapper, LargeButton, MarksWrapper, StudentWrapper, TutorWrapper, MarksText, MarksPercent, ImageWrapper, Image } from "./VocabularyStyle"

const Vocabulary = () => {
    let leftNumber = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
    let topNumber = []
    for (let i = 1; i <= 10; i++ ) {
        topNumber.push(i)
    }
    return (
        <Wrapper>
            <ColorLayer />
            <TopWrapper>
               {topNumber.map((value, index) => (
                <TopButton key={index}>{value + 10}</TopButton>
               ))
            }
            </TopWrapper>
            <BottomWrapper>
                <LeftWrapper>
                    {leftNumber.map((value, index) => (
                        <LeftButton key={index}>{value}</LeftButton>
                    ))

                    }

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