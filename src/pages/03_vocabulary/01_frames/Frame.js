import { useState, useEffect } from "react"
import { FramesWrapper, Frame, CheckButton, CheckButtonFrame,  LanguageButtonsWrapper, LanguageButton, Input, Word, WordCheck, WordSpan, WordSpanCheck, TranslatSpan, LargeButtonsWrapper, LargeButton, NumberButtonWrapper, TopButton, BottomButton, MarkButton, Mark } from "./FrameStyle"
import { hundredsFrames } from "../../../components/01_config/GreenFrames"
import { tensFrames } from "../../../components/01_config/GreenFrames"
import { colors } from "../../../components/01_config/Colors"

const FrameComponent = ({TwoThousand, startTestMode, listOfWordsMode, twoThousand, tenWords, setTenWords }) => {

    const [thousand, setThousand] = useState("First Thousand")
    const [topNumbers, setTopNumbers] = useState([])
    const [bottomNumbers, setBottomNumbers] = useState([])
    const [topNumber, setTopNumber] = useState("1")
    const [bottomNumber, setBottomNumber] = useState("1")
    const [language, setLanguage] = useState("Eng")    


    const setThousandButton = (e) => {
        let id = e.target.id
        setThousand(id === "first" ? "First Thousand" : "Second Thousand")
        setTopNumbers(id === "first" ? hundredsFrames.filter(val => val.number <= 1000) : hundredsFrames.filter(val => val.number > 1000))
        setBottomNumbers(id === "first" ? tensFrames.filter(val => (val.number <= 100)) : tensFrames.filter(val => (val.number > 1000 && val.number <= 1100)))
        setTenWords(id === "first" ? TwoThousand.filter(val => val.id <= 10) : TwoThousand.filter(val => val.id > 1000 && val.id <= 1010))
        setTopNumber(1)
        setBottomNumber(1)
    }

    const clickLanguage = (e) => {
        if (e.target.id === "Eng") {
            setLanguage("Eng")
        } else {
            setLanguage("Ukr")
        }
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


    const clickTopButton = (e) => {
        setTopNumber(Number(e.target.id) + 1 || 1)
        setBottomNumbers(tensFrames.filter(val => (val.number <= Number(e.target.name) && val.number > (Number(e.target.name) - 100))))
    }

    const clickBottomButton = (e) => {
        setBottomNumber(Number(e.target.id) + 1 || 1)
        setTenWords(twoThousand.filter(val => val.id > (Number(e.target.name) - 10) && val.id <= Number(e.target.name)))
    }

    useEffect(() => {
        let e = {target: {id: "first"}}
        setThousandButton(e)
    }, [])

  return (
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
                        onClick={setThousandButton}
                        thousand={thousand}
                        id="first"
                        >
                            First Thousand
                        </LargeButton>
                        <LargeButton
                        thousand={thousand}
                        id="second"
                        onClick={setThousandButton}
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
  )
}

export default FrameComponent