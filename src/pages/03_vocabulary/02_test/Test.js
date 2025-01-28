import { useState, useEffect } from "react"
import { TestButtonsWrapper, TestButton, CheckWordWrapper, BarTestWrapper, ClosedButton, WordCheck, CheckButton, WordSpanCheck, CreateButton, TestWordWrapper, TestedWord } from "./TestStyle"
import { colors } from "../../../components/01_config/Colors"

const Test = ({ twoThousand, setTwoThousand, tenWords, setTenWords, startTestMode, setStartTestMode, listOfWordsMode, setListOfWordsMode }) => {

    const [listOfWords, setListOfWords] = useState([])
    const [testWordsArr, setTestWordsArr] = useState([])
    const [showTestWord, setShowTestWord] = useState()
    const [testResults, setTestResults] = useState(false)
    const [randomNumber, setRandomNumber] = useState()

    const runTheTest = () => {
        // let ind = twoThousand.findIndex(obj => obj.id === 2)
        // console.log(ind)
        // let twoThousandArr = [...twoThousand]
        // twoThousandArr[ind].word = "orange"
        // setTwoThousand(twoThousandArr)

        setStartTestMode(false)
        setListOfWordsMode(true)
        let newTenWords = tenWords.map(val => ({ ...val, engCorrect: false, ukrCorrect: false }))
        setTenWords(newTenWords)
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
        let indexUkr = twoThousand.map(val => val.translat).indexOf(testWordsArr[n])
        let indexEng = twoThousand.map(val => val.word).indexOf(testWordsArr[n])
        setRandomNumber([indexUkr, indexEng])
        setShowTestWord(testWordsArr[n])
        let newTestWordsArr = [...testWordsArr]
        let ind = newTestWordsArr.indexOf(newTestWordsArr[n])
        newTestWordsArr.splice(ind, 1)
        setTestWordsArr(newTestWordsArr)
        let newArr = [...twoThousand]
        indexUkr === -1 ? newArr[indexEng].engCorrect = false : newArr[indexUkr].ukrCorrect = false
        setTwoThousand(newArr)
    }

    const leftClickTestedWord = (e) => {
        rightClickTestedWord(e)
        if (randomNumber.length !== 0) {
            let checkIndexUkr = randomNumber[0]
            let checkIndexEng = randomNumber[1]
            let newTwoThousand = [...twoThousand]
            checkIndexUkr === -1 ? newTwoThousand[checkIndexEng].engCorrect = true : newTwoThousand[checkIndexUkr].ukrCorrect = true
            setTwoThousand(newTwoThousand)
        }
    }

    const showTestResults = () => {
        setTestResults(true)
        setStartTestMode(false)
    }

    const recordResults = () => {
        setTestResults(false)
        let newTwoThousand = [...twoThousand]
        for (let i = 0; i < newTwoThousand.length; i++) {
            if (newTwoThousand[i].engCorrect && newTwoThousand[i].ukrCorrect) {
                newTwoThousand[i].correctTutor = true
            }
        }
        setTwoThousand(newTwoThousand)
    }

    useEffect(() => {
        setListOfWords(twoThousand.filter(val => val.correctStudent === true))
    }, [tenWords])

    return (

        <>

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
                {twoThousand.filter(val => val.tobeChecked === true).map((value, index) => (
                    <WordCheck key={index} style={{ textAlign: "center" }}>
                        <WordSpanCheck style={{ color: (value.engCorrect && value.ukrCorrect) ? "green" : "" }}> {value.word}</WordSpanCheck>
                    </WordCheck>
                ))}
                <CreateButton onClick={recordResults}>RECORD RESULTS</CreateButton>
            </CheckWordWrapper>}
        </>
    )
}

export default Test