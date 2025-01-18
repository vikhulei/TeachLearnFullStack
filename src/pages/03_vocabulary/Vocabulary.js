import { useState, useEffect } from "react"
import { Wrapper, Header, HeaderText, Title, MainText, CheckWordWrapper, TestWordWrapper, TestButtonsWrapper, TestButton, CreateButton, WordCheck, WordSpanCheck, LargeCircle, MediumCircle, SmallCircle, ImageWrapper, Image, LineCircleTextWrapper, CircleTextWrapper, Circle, Line, CircleHeading, CircleText, CheckButton, BarTestWrapper, ClosedButton, TestedWord, CheckButtonFrame } from "./VocabularyStyle"
import { TwoThousand } from "../../components/01_config/TwoThousand"
import picture from "../../assets/01_home/home.jpg"
import { colors } from "../../components/01_config/Colors"
import FrameComponent from "./01_frames/Frame"


const Vocabulary = () => {
    const [twoThousand, setTwoThousand] = useState(TwoThousand)
    const [tenWords, setTenWords] = useState(
        TwoThousand.filter(val => val.id > 500 && val.id <= 510).map(val => ({ ...val, engCorrect: false, ukrCorrect: false }))
    )
    const [listOfWords, setListOfWords] = useState([])
    const [startTestMode, setStartTestMode] = useState(false)
    const [listOfWordsMode, setListOfWordsMode] = useState(false)
    const [testWordsArr, setTestWordsArr] = useState([])
    const [showTestWord, setShowTestWord] = useState()
    const [testResults, setTestResults] = useState(false)
    const [randomNumber, setRandomNumber] = useState()


    const runTheTest = () => {
        let ind = twoThousand.findIndex(obj => obj.id === 2)
        console.log(ind)
        let twoThousandArr = [...twoThousand]
        twoThousandArr[ind].word = "orange"
        setTwoThousand(twoThousandArr)
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
        setListOfWords(TwoThousand.filter(val => val.correctStudent === true))
    }, [tenWords])

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

            {/* ------------------START OF FRAME--------------- */}
            
            <FrameComponent 
                startTestMode={startTestMode}
                listOfWordsMode={listOfWordsMode}
                twoThousand={twoThousand}
                tenWords={tenWords}
                setTenWords={setTenWords}
                TwoThousand={TwoThousand}
            />

            {/* ------------------END OF FRAME--------------- */}


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


