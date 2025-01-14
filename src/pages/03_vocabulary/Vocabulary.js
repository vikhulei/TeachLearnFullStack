import { useState, useEffect } from "react"
import { Wrapper, Header, HeaderText, Title, MainText, FramesWrapper, Frame, CheckWordWrapper, TestWordWrapper, TestButtonsWrapper, TestButton, CreateButton, LanguageButtonsWrapper, LanguageButton, Input, Word, WordCheck, WordSpan, WordSpanCheck, TranslatSpan, LargeButtonsWrapper, LargeButton, NumberButtonWrapper, TopButton, BottomButton, MarkButton, Mark, LargeCircle, MediumCircle, SmallCircle, ImageWrapper, Image, LineCircleTextWrapper, CircleTextWrapper, Circle, Line, CircleHeading, CircleText, CheckButton, BarTestWrapper, ClosedButton, TestedWord, CheckButtonFrame } from "./VocabularyStyle"
import { TwoThousands } from "../../components/01_config/HundredWords"
import picture from "../../assets/01_home/home.jpg"
import { hundredsFrames } from "../../components/01_config/GreenFrames"
import { tensFrames } from "../../components/01_config/GreenFrames"
import { colors } from "../../components/01_config/Colors"

// const TenWords = HundredWords.filter(val => val.id > 500 && val.id <= 510)
// const listOfWords = TenWords.filter(val => val.correctStudent === true)

//.map(val => ({...val, engCorrect: false, ukrCorrect: false}))

const Vocabulary = () => {
    const [twoThousands, setTwoThousands] = useState(TwoThousands)
    const [thousand, setThousand] = useState("")
    const [topNumbers, setTopNumbers] = useState([])
    const [bottomNumbers, setBottomNumbers] = useState([])
    const [language, setLanguage] = useState("Eng")
    const [tenWords, setTenWords] = useState(
        TwoThousands.filter(val => val.id > 500 && val.id <= 510).map(val => ({ ...val, engCorrect: false, ukrCorrect: false }))
    )
    const [listOfWords, setListOfWords] = useState([])
    const [topNumber, setTopNumber] = useState("1")
    const [bottomNumber, setBottomNumber] = useState("1")
    const [framesInactive, setFramesInactive] = useState(false)
    const [startTestMode, setStartTestMode] = useState(false)
    const [listOfWordsMode, setListOfWordsMode] = useState(false)
    const [testWordsArr, setTestWordsArr] = useState([])
    const [showTestWord, setShowTestWord] = useState()
    const [testResults, setTestResults] = useState(false)
    const [randomNumber, setRandomNumber] = useState()


    const setFirstThousand = () => {
        setThousand("First Thousand")
        setTopNumbers(hundredsFrames.filter(val => val.number <= 1000))
    }

    const setSecondThousand = () => {
        setThousand("Second Thousand")
        setTopNumbers(hundredsFrames.filter(val => val.number > 1000))
    }

    // const changeThousand = () => {
    //     let e
    //     if (thousand === "First Thousand") {
    //         setThousand("Second Thousand")
    //         setTopNumbers(hundredsFrames.filter(val => val.number > 1000))
    //         localStorage.setItem("savedThousand", "Second Thousand")
    //         e = { target: { name: 1100 } }
    //     } else {
    //         setThousand("First Thousand")
    //         setTopNumbers(hundredsFrames.filter(val => val.number <= 1000))
    //         localStorage.setItem("savedThousand", "First Thousand")
    //         e = { target: { name: 100 } }
    //     }
    //     clickTopButton(e)
    // }

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
        setTenWords(twoThousands.filter(val => val.id > (Number(e.target.name) - 10) && val.id <= Number(e.target.name)))
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

    const runTheTest = () => {
        let ind = twoThousands.findIndex(obj => obj.id === 2)
        console.log(ind)
        let twoThousandsArr = [...twoThousands]
        twoThousandsArr[ind].word = "orange"
        setTwoThousands(twoThousandsArr)
        // setStartTestMode(false)
        // setListOfWordsMode(true)
        // let newTenWords = tenWords.map(val => ({ ...val, engCorrect: false, ukrCorrect: false }))
        // setTenWords(newTenWords)
    }

    const selectCheckedWords = (e) => {
        let newArr = [...listOfWords]
        newArr[e.target.id].tobeChecked = !newArr[e.target.id].tobeChecked
        setListOfWords(newArr)
    }

    const createTestWordsArr = () => {
        let newTestWordsArr = []
        for (let i = 0; i < listOfWords.length; i++) {
            if (listOfWords[i].tobeChecked === true) {
                newTestWordsArr.push(listOfWords[i].word, listOfWords[i].translat)
                setTestWordsArr(newTestWordsArr)
            }
        }
        setRandomNumber([])
        clickStartTest()
    }

    const clickStartTest = () => {
        setListOfWordsMode(false)
        setStartTestMode(true)
        setShowTestWord("LET'S BEGIN")
    }


    // const keyPressed = (e) => {
    //     if(e.key === "y") {
    //         console.log("Y is pressed")
    //     } else if(e.key === "n") {
    //         console.log("N is pressed")
    //     } else {
    //         return
    //     }
    // }


    const rightClickTestedWord = (e) => {

        e.preventDefault()

        if (testWordsArr.length === 0) {
            return setShowTestWord("end of test")
        }

        let n = Math.floor(Math.random() * testWordsArr.length)
        let indexUkr = tenWords.map(val => val.translat).indexOf(testWordsArr[n])
        let indexEng = tenWords.map(val => val.word).indexOf(testWordsArr[n])
        setRandomNumber([indexUkr, indexEng])
        setShowTestWord(testWordsArr[n])
        let newTestWordsArr = [...testWordsArr]
        let ind = newTestWordsArr.indexOf(newTestWordsArr[n])
        newTestWordsArr.splice(ind, 1)
        setTestWordsArr(newTestWordsArr)
    }

    const leftClickTestedWord = (e) => {


        rightClickTestedWord(e)

        if (randomNumber.length !== 0) {
            let checkIndexUkr = randomNumber[0]
            let checkIndexEng = randomNumber[1]
            let newArr = [...tenWords]
            checkIndexUkr === -1 ? newArr[checkIndexEng].engCorrect = true : newArr[checkIndexUkr].ukrCorrect = true
            setTenWords(newArr)
        }
    }

    const showTestResults = () => {
        setTestResults(true)
        setStartTestMode(false)
    }

    const recordResults = () => {
        setTestResults(false)
        let newTenWords = [...tenWords]
        for (let i = 0; i < newTenWords.length; i++) {
            if(newTenWords[i].engCorrect && newTenWords[i].ukrCorrect ) {
                newTenWords[i].correctTutor = true
            }
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

    useEffect(() => {
        setListOfWords(TwoThousands.filter(val => val.correctStudent === true))
    }, [tenWords])

    // useEffect(() => {
    //     if (showTestWord === "LET'S BEGIN") {
    //         clickTestedWord()
    //     }
    // }, [showTestWord])


    // function handleKeyDown(e) {
    //     if(startTestMode === true) {
    //         if(e.keyCode === 89) {   //Yes pressed
    //             leftClickTestedWord()
    //         } else if (e.keyCode === 78) { //No pressed
    //             rightClickTestedWord()
    //         }
    //     } else {
    //     }
    // }

//   useEffect(() => {

//     document.addEventListener('keydown', handleKeyDown);

//     return function cleanup() {
//       document.removeEventListener('keydown', handleKeyDown);
//     }
//   }, [startTestMode]);


    return (
        <Wrapper>
            <Header>
                <HeaderText>Vocabulary</HeaderText>
            </Header>
            <Title>World-Class solution for learning a language</Title>
            <MainText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.
            </MainText>

            {/* 1. RUN THE TEST BUTTON */}

            <TestButtonsWrapper>
                <TestButton onClick={runTheTest}>Start the Test</TestButton>
            </TestButtonsWrapper>

            {/* 2. LIST OF WORDS WINDOW */}

            {listOfWordsMode && <CheckWordWrapper>
                <BarTestWrapper>
                    List Of Words
                    <ClosedButton onClick={() => setListOfWordsMode(false)}>X</ClosedButton>
                </BarTestWrapper>
                {listOfWords.map((value, index) => (
                    <WordCheck key={index}>
                        <CheckButton
                            id={index}
                            beChecked={value.tobeChecked}
                            onClick={selectCheckedWords}
                            style={{ "backgroundColor": value.tobeChecked ? colors.green : "" }}
                        >
                        </CheckButton>
                        <WordSpanCheck> {value.word}</WordSpanCheck>
                    </WordCheck>
                ))}
                <CreateButton onClick={createTestWordsArr}>START</CreateButton>
            </CheckWordWrapper>}

            {/* 3. WORDS TEST WINDOW */}

            {startTestMode && <TestWordWrapper>
                <BarTestWrapper>
                    Words Test
                    <ClosedButton onClick={() => setStartTestMode(false)}>X</ClosedButton>
                </BarTestWrapper>
                <TestedWord
                onClick={leftClickTestedWord}
                onContextMenu={rightClickTestedWord}
                >
                
                    {showTestWord}
                
                </TestedWord>
                {showTestWord === "end of test" && <CreateButton onClick={showTestResults}>TEST RESULTS</CreateButton>}
            </TestWordWrapper>}

            {/* 4. TEST RESULTS WINDOW */}

            {testResults && <CheckWordWrapper>
                <BarTestWrapper>
                    Test Results
                    <ClosedButton onClick={() => setTestResults(false)}>X</ClosedButton>
                </BarTestWrapper>
                {tenWords.filter(val => val.tobeChecked === true).map((value, index) => (
                    <WordCheck key={index} style={{ textAlign: "center" }}>
                        <WordSpanCheck style={{ color: (value.engCorrect && value.ukrCorrect) ? "green" : "" }}> {value.word}</WordSpanCheck>
                    </WordCheck>
                ))}
                <CreateButton onClick={recordResults}>RECORD RESULTS</CreateButton>
            </CheckWordWrapper>}

            {/* --------------------------------- */}

            <FramesWrapper startTestMode={startTestMode} listOfWordsMode={listOfWordsMode}>
                <Frame>
                    <LanguageButtonsWrapper>
                        <LanguageButton onClick={clickLanguage} language={language} id="Eng">English</LanguageButton>
                        <LanguageButton onClick={clickLanguage} language={language} id="Ukr">Ukrainian</LanguageButton>
                    </LanguageButtonsWrapper>
                    {tenWords.map((value, index) => (
                        <Word key={index} >
                            <CheckButtonFrame
                                onClick={clickInputButton}
                                correctStudent = {value.correctStudent}
                                correctTutor = {value.correctTutor}
                                id={index}
                                // style={{ "backgroundColor": value.correctStudent ? colors.green : "" ,
                                 
                                // }}
                            >
                            </CheckButtonFrame>
                            <Input
                                type="text"
                                data-input={value.input}
                                data-translat={value.translat}
                                data-word={value.word}
                                autocomplete="off"
                                id={index}
                                style={{ "backgroundColor": (language === "Ukr" && value.input === value.word) || (language === "Eng" && value.input === value.translat) ? `${colors.green}` : "" }}
                                value={value.input}
                                onInput={fillInput}
                            />
                            <WordSpan style={{ color: value.correctTutor ? colors.greenWord : "black" }} id={value.id} onClick={clickWord}> {value.id}. {language === "Eng" ? value.word : value.translat}</WordSpan> <TranslatSpan style={{ "visibility": value.visibility }}>{language === "Eng" ? value.translat : value.word}</TranslatSpan>
                        </Word>
                    ))}
                </Frame>
                <Frame>
                    <LargeButtonsWrapper>
                        <LargeButton
                        onClick={setFirstThousand}
                        // onClick={changeThousand}
                        thousand={thousand}
                        // id="first"
                        >
                            First Thousand
                        </LargeButton>
                        <LargeButton
                        thousand={thousand}
                        onClick={setSecondThousand}
                        >
                            Second Thousand
                        </LargeButton>
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


