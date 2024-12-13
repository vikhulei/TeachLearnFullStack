import { useState, useEffect } from "react"
import { Wrapper, Header, HeaderText, Title, MainText, FramesWrapper, Frame, LanguageButtonsWrapper, LanguageButton, Input, Word, WordSpan, TranslatSpan, LargeButtonsWrapper,LargeButton, NumberButtonWrapper, NumberButton, MarkButton, Mark, LargeCircle, MediumCircle, SmallCircle, ImageWrapper, Image, LineCircleTextWrapper, CircleTextWrapper, Circle, Line, SubHeading} from "./VocabularyStyle"
import { TenWords } from "../../components/01_config/TenWords"
import girl from "../../assets/02_vocabulary/girl.png"

const Vocabulary = () => {
    const [thousand, setThousand] = useState()
    const [leftNumbers, setLeftNumbers] = useState([])
    const [topNumbers, setTopNumbers] = useState([])
    const [language, setLanguage] = useState("Eng")
    const [showTranslation, setShowTranslation] = useState(false)
    const [tenWords, setTenWords] = useState(TenWords)

    const changeThousand = () => {
        let e
        if (thousand === "First Thousand") {
            setThousand("Second Thousand")
            localStorage.setItem("savedThousand", "Second Thousand")
            e = { target: { name: 1100 } }
        } else {
            setThousand("First Thousand")
            localStorage.setItem("savedThousand", "First Thousand")
            e = { target: { name: 100 } }
        }
        clickLeft(e)
    }

    const fillLeftButtons = (checkThousand) => {
        setLeftNumbers([])
        if (checkThousand === "First Thousand") {
            for (let i = 1; i <= 10; i++) {
                setLeftNumbers(prev => [...prev, i * 100])
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                setLeftNumbers(prev => [...prev, i * 100 + 1000])
            }
        }
    }

    const clickLeft = (e) => {
        localStorage.setItem("savedLeftNumber", Number(e.target.name))
        setTopNumbers([])
        for (let i = 1; i <= 10; i++) {
            setTopNumbers(prev => [...prev, (Number(e.target.name) + i * 10 - 100)])
        }
    }

    const clickInput = (e) => {
        console.log(e.target.id)
    }

    const clickWord = (e) => {
        setTenWords(tenWords.map(val =>
            val.id === Number(e.target.id) ? { ...val, visibility: val.visibility === "hidden" ? "visible" : "hidden" } : val
        ))
    }

    const clickLanguage = () => {
        if (language === "Eng") {
            setLanguage("Ukr")
        } else {
            setLanguage("Eng")
        }
    }

    useEffect(() => {
        let savedThousand = localStorage.getItem("savedThousand") || "First Thousand"
        setThousand(savedThousand)
        fillLeftButtons(savedThousand)
        let e = { target: { name: localStorage.getItem("savedLeftNumber") || 100 } }
        clickLeft(e)
    }, [])

    useEffect(() => {
        fillLeftButtons(thousand)
    }, [thousand])

    return (
        <Wrapper>
            <Header>
                <HeaderText>Vocabulary</HeaderText>
            </Header>
            <Title>World-Class solution for learning a language</Title>
            <MainText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.</MainText>
            <FramesWrapper>
                <Frame>
                    <LanguageButtonsWrapper>
                        <LanguageButton onClick={clickLanguage}>English</LanguageButton>
                        <LanguageButton onClick={clickLanguage}>Ukrainian</LanguageButton>
                    </LanguageButtonsWrapper>
                    {tenWords.map((value, index) => (
                        <Word key={index}>
                            <Input onClick={clickInput} id={value.id} /><WordSpan style={{ color: value.color }} id={value.id} onClick={clickWord}> {value.id}. {language === "Eng" ? value.word : value.translat}</WordSpan> <TranslatSpan style={{ "visibility": value.visibility }}>{language === "Eng" ? value.translat : value.word}</TranslatSpan>
                        </Word>
                    ))}
                </Frame>
                <Frame>
                    <LargeButtonsWrapper>
                        <LargeButton>First Thousand</LargeButton>
                        <LargeButton>Second Thousand</LargeButton>
                    </LargeButtonsWrapper>
                    <NumberButtonWrapper>
                        {topNumbers.map((value, index) => (
                            <NumberButton key={index}>{value}</NumberButton>
                        ))
                        }
                    </NumberButtonWrapper>
                    <NumberButtonWrapper>
                        {leftNumbers.map((value, index) => (
                            <NumberButton key={index} name={value} onClick={clickLeft}>{value}</NumberButton>
                        ))
                        }
                    </NumberButtonWrapper>
                    <LargeButtonsWrapper>
                        <MarkButton> Student's mark <Mark>72%</Mark></MarkButton>
                        <MarkButton> Tutor's mark <Mark>64%</Mark></MarkButton>
                    </LargeButtonsWrapper>
                </Frame>
            </FramesWrapper>
            {/* <ColorLayer /> */}
            {/* <TopWrapper>

            </TopWrapper>
            <BottomWrapper>
                <LeftWrapper>

                </LeftWrapper>
                <CentralWrapper>
                    {tenWords.map((value, index) => (
                        <Word key={index}>
                            <Input onClick={clickInput} id={value.id} /><WordSpan style={{ color: value.color }} id={value.id} onClick={clickWord}> {value.id}. {language === "Eng" ? value.word : value.translat}</WordSpan> <TranslatSpan style={{ "visibility": value.visibility }}>{language === "Eng" ? value.translat : value.word}</TranslatSpan>
                        </Word>
                    ))}
                </CentralWrapper>
                <RightWrapper>
                    <LargeButtonsWrapper>
                        <LargeButton onClick={changeThousand}>{`${thousand === "First Thousand" ? "Second Thousand" : "First Thousand"}`}</LargeButton>
                        <LargeButton onClick={clickLanguage}>{language === "Ukr" ? "English" : "Ukrainian"}</LargeButton>
                    </LargeButtonsWrapper>
                    <MarksWrapper>
                        <StudentWrapper>
                            <MarksText>Student's Mark</MarksText>
                            <MarksPercent>72%</MarksPercent>
                        </StudentWrapper>
                        <TutorWrapper>
                            <MarksText>Tutor's Mark</MarksText>
                            <MarksPercent>64%</MarksPercent>
                        </TutorWrapper>
                    </MarksWrapper>
                    <ImageWrapper>
                        <Image src={girl}/>
                    </ImageWrapper>
                </RightWrapper>
            </BottomWrapper> */}

        </Wrapper>
    )
}

export default Vocabulary