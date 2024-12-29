import { useState, useEffect } from "react"
import { Wrapper, Header, HeaderText, Title, MainText, FramesWrapper, Frame, TestWrapper, LanguageButtonsWrapper, LanguageButton, Input, Word, WordSpan, TranslatSpan, LargeButtonsWrapper, LargeButton, NumberButtonWrapper, TopButton, BottomButton, MarkButton, Mark, LargeCircle, MediumCircle, SmallCircle, ImageWrapper, Image, LineCircleTextWrapper, CircleTextWrapper, Circle, Line, CircleHeading, CircleText, CheckButton } from "./VocabularyStyle"
import { HundredWords } from "../../components/01_config/HundredWords"
import girl from "../../assets/02_vocabulary/girl.png"
import picture from "../../assets/01_home/home.jpg"
import { hundredsFrames } from "../../components/01_config/GreenFrames"
import { tensFrames } from "../../components/01_config/GreenFrames"
import { colors } from "../../components/01_config/Colors"

const TenWords = HundredWords.filter(val => val.id > 510 && val.id <= 520)


const Vocabulary = () => {
    const [thousand, setThousand] = useState("")
    const [topNumbers, setTopNumbers] = useState([])
    const [bottomNumbers, setBottomNumbers] = useState([])
    const [language, setLanguage] = useState("Eng")
    const [showTranslation, setShowTranslation] = useState(false)
    const [tenWords, setTenWords] = useState(TenWords)
    const [topNumber, setTopNumber] = useState("1")
    const [bottomNumber, setBottomNumber] = useState("1")
    const [frameGreen, setFrameGreen] = useState(false)
    const [correctWord, setCorrectWord] = useState("")
    const [greenInputButton, setGreenInputButton] = useState(false)

    const changeThousand = () => {
        let e
        if (thousand === "First Thousand") {
            setThousand("Second Thousand")
            setTopNumbers(hundredsFrames.filter(val => val.number > 1000))
            localStorage.setItem("savedThousand", "Second Thousand")
            e = { target: { name: 1100 } }
        } else {
            setThousand("First Thousand")
            setTopNumbers(hundredsFrames.filter(val => val.number <= 1000))
            localStorage.setItem("savedThousand", "First Thousand")
            e = { target: { name: 100 } }
        }
        clickTopButton(e)
    }

    const fillTopButtons = (checkThousand) => {
        setTopNumbers([])
        if (checkThousand === "First Thousand") {
            setTopNumbers(hundredsFrames.filter(val => val.number <= 1000))
        } else {
            setTopNumbers(hundredsFrames.filter(val => val.number > 1000))
        }
    }

    const clickTopButton = (e) => {
        setTopNumber(Number(e.target.id) + 1 || 1)
        localStorage.setItem("savedLeftNumber", Number(e.target.name))
        setBottomNumbers(tensFrames.filter(val => (val.number <= Number(e.target.name) && val.number > (Number(e.target.name) - 100))))
    }

    const clickBottomButton = (e) => {
        setBottomNumber(Number(e.target.id) + 1 || 1)
        setTenWords(HundredWords.filter(val => val.id > (Number(e.target.name) - 10) && val.id <= Number(e.target.name)))
    }

    const rightClick = (e) => {
        e.preventDefault()
        alert("right click")
    }

    const clickInputButton = (e) => {
        let newArr = [...tenWords]
        newArr[e.target.id].correctStudent = !newArr[e.target.id].correctStudent
        setTenWords(newArr)
    }

    const fillInput = (e) => {
        let newArr = [...tenWords]
        newArr[e.target.id].input = e.target.value
        setTenWords(newArr)
    }

    const clickWord = (e) => {
        setTenWords(tenWords.map(val =>
            val.id === Number(e.target.id) ? { ...val, visibility: val.visibility === "hidden" ? "visible" : "hidden" } : val
        ))
    }


    const clickLanguage = (e) => {
        if (e.target.id === "Eng") {
            setLanguage("Eng")
        } else {
            setLanguage("Ukr")
        }
    }

    useEffect(() => {
        let savedThousand = localStorage.getItem("savedThousand") || "First Thousand"
        setThousand(savedThousand)
        fillTopButtons(savedThousand)
        let e = { target: { name: localStorage.getItem("savedLeftNumber") || 100 } }
        clickTopButton(e)
        setTopNumber(1)
    }, [])


    return (
        <Wrapper>
            <TestWrapper>World</TestWrapper>
            <Header>
                <HeaderText>Vocabulary</HeaderText>
            </Header>
            <Title>World-Class solution for learning a language</Title>
            <MainText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.
            </MainText>
            <FramesWrapper>
                <Frame>
                    <LanguageButtonsWrapper>
                        <LanguageButton onClick={clickLanguage} language={language} id="Eng">English</LanguageButton>
                        <LanguageButton onClick={clickLanguage} language={language} id="Ukr">Ukrainian</LanguageButton>
                    </LanguageButtonsWrapper>
                    {tenWords.map((value, index) => (
                        <Word key={index} >

                            <CheckButton
                                onClick={clickInputButton}
                                onContextMenu={rightClick}
                                id={index}
                                style={{ "backgroundColor": value.correctStudent ? colors.green : "" }}
                            >
                            </CheckButton>

                            <Input
                                type="text"
                                data-input={value.input}
                                data-translat={value.translat}
                                data-word={value.word}
                                autocomplete="off"
                                id={index}

                                style={{ "backgroundColor": language === "Ukr" && value.input === value.word || language === "Eng" && value.input === value.translat ? `${colors.green}` : "" }}
                                value={value.input}

                                onInput={fillInput}
                            />

                            <WordSpan style={{ color: value.correctTutor ? colors.greenWord : "black" }} id={value.id} onClick={clickWord}> {value.id}. {language === "Eng" ? value.word : value.translat}</WordSpan> <TranslatSpan style={{ "visibility": value.visibility }}>{language === "Eng" ? value.translat : value.word}</TranslatSpan>
                        </Word>
                    ))}
                </Frame>
                <Frame>
                    <LargeButtonsWrapper>
                        <LargeButton onClick={changeThousand} thousand={thousand} id="first">First Thousand</LargeButton>
                        <LargeButton onClick={changeThousand} thousand={thousand} id="second">Second Thousand</LargeButton>
                    </LargeButtonsWrapper>
                    <NumberButtonWrapper>
                        {topNumbers.map((value, index) => (
                            <TopButton key={index} name={value.number} topNumber={topNumber} id={index} color={value.color} onClick={clickTopButton}>{value.number}</TopButton>
                        ))
                        }
                    </NumberButtonWrapper>
                    <NumberButtonWrapper>
                        {bottomNumbers.map((value, index) => (
                            <BottomButton key={index} id={index} name={value.number} bottomNumber={bottomNumber} color={value.color} onClick={clickBottomButton}>{value.number}</BottomButton>
                        ))
                        }
                    </NumberButtonWrapper>
                    <LargeButtonsWrapper>
                        <MarkButton> Student's mark <Mark>72%</Mark></MarkButton>
                        <MarkButton> Tutor's mark <Mark>64%</Mark></MarkButton>
                    </LargeButtonsWrapper>
                </Frame>
            </FramesWrapper>
            <LargeCircle />
            <MediumCircle />
            <SmallCircle />
            <ImageWrapper>
                <Image src={picture} />
            </ImageWrapper>
            <Title>Memorizing Process</Title>
            <LineCircleTextWrapper>
                <CircleTextWrapper>
                    <Circle>1</Circle>
                    <CircleHeading>Record</CircleHeading>
                    <CircleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed </CircleText>
                </CircleTextWrapper>
                <CircleTextWrapper>
                    <Circle>2</Circle>
                    <CircleHeading>Retain</CircleHeading>
                    <CircleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed </CircleText>
                </CircleTextWrapper>
                <CircleTextWrapper>
                    <Circle>3</Circle>
                    <CircleHeading>Retrieve</CircleHeading>
                    <CircleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed </CircleText>
                </CircleTextWrapper>
                <Line />
            </LineCircleTextWrapper>
        </Wrapper>
    )
}

export default Vocabulary


