import { useState } from "react"
import { FillInSentence, FillInInput } from "./FillitinStyle"
import { Frame, FrameHeading, Icon, SentenceWrapper, Correct } from "../ExercisesStyle"
import { GrammarFillit } from "../../../00_exercises/GrammarFillit"
import fillin from "../../../../../../assets/02_myprogress/lessons/fillin.png"
import { colors } from "../../../../../../components/01_config/Colors"


const Fillitin = () => {

    const [grammarFillit, setGrammarFillit] = useState(
        GrammarFillit.filter(val => val.lesson === 1)
    )
    const [inputValue, setInputValue] = useState("")

    const clickFillit = (e) => {
        setGrammarFillit(grammarFillit.map(val =>
            val.id === Number(e.currentTarget.id) ? { ...val, visibility: val.visibility === "hidden" ? "visible" : "hidden" } : val
        ))
    }

    const fillInput = (e) => {
        let newGrammarFillit = [...grammarFillit]
        newGrammarFillit[e.target.id].input = e.currentTarget.value
        setGrammarFillit(newGrammarFillit)
    }

    return (
        <Frame>
            <FrameHeading>
                fill it in
            </FrameHeading>
            <Icon
                src={fillin}
            />
            {grammarFillit.map((value, index) => (
                <SentenceWrapper
                    key={index}
                >
                    <FillInSentence
                        onClick={clickFillit}
                        id={value.id}
                    >
                        {value.sentence}
                    </FillInSentence>
                    <FillInInput
                        style={{backgroundColor: value.input === value.translat ? `${colors.green}` : ""}}
                        id={value.id - 1}
                        value={value.input}
                        onInput={fillInput}
                    />
                    <Correct
                        style={{ visibility: value.visibility }}
                    >
                        {value.translat}
                    </Correct>
                </SentenceWrapper>
            ))}
        </Frame>
    )
}

export default Fillitin