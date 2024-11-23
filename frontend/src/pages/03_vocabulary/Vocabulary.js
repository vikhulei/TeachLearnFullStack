import { useState, useEffect } from "react"
import { Wrapper, ColorLayer, TopWrapper, TopButton, BottomWrapper, LeftWrapper, LeftButton, CentralWrapper, InputsWrapper, Input, WordsWrapper, Word, RightWrapper, LargeButtonsWrapper, LargeButton, MarksWrapper, StudentWrapper, TutorWrapper, MarksText, MarksPercent, ImageWrapper, Image } from "./VocabularyStyle"

const Vocabulary = () => {

    let savedThousand = localStorage.getItem("savedThousand") || "First Thousand"

    const [thousand, setThousand] = useState(savedThousand)
    const [leftNumbers, setLeftNumbers] = useState([])
    const [topNumbers, setTopNumbers] = useState([])

    const fillLetNumber = () => {
        let arr = []
        if (savedThousand === "First Thousand") {
            for (let i = 1; i <= 10; i++) {
                arr.push(i * 100)
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                arr.push(i * 100 + 1000)
            }
        }
        setLeftNumbers(arr)
    }


    const changeThousand = () => {
        if (thousand === "First Thousand") {
            setThousand("Second Thousand")
            localStorage.setItem("savedThousand", "Second Thousand")
        } else {
            setThousand("First Thousand")
            localStorage.setItem("savedThousand", "First Thousand")
        }
        fillLetNumber()
    }


    // let leftNumbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

    const clickLeft = (e) => {
        setTopNumbers([])
        for (let i = 1; i <= 10; i++) {
            setTopNumbers(prev => [...prev, (Number(e.target.name) + i * 10)])
        }
    }

    useEffect(() => {
        fillLetNumber()
    }, [])

    return (
        <Wrapper>
            <ColorLayer />
            <TopWrapper>
                {topNumbers.map((value, index) => (
                    <TopButton key={index}>{value}</TopButton>
                ))
                }
            </TopWrapper>
            <BottomWrapper>
                <LeftWrapper>
                    {leftNumbers.map((value, index) => (
                        <LeftButton key={index} name={value} onClick={clickLeft}>{value}</LeftButton>
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
                        <LargeButton onClick={changeThousand}>{thousand}</LargeButton>
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