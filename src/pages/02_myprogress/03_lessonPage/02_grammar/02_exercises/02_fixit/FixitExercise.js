import { useState } from "react"
import { Frame, FrameHeading, Icon, SentenceWrapper, Text, Correct, BoldWord, FixitInput  } from "./FixitExerciseStyle"
import fixit from "../../../../../../assets/02_myprogress/lessons/fixit.png"
import { FixitExerciseData } from "./FixitExerciseData"
import { colors } from "../../../../../../components/01_config/Colors"

const FixitExercise = () => {

    const [grammarFixit, setFixitExerciseData] = useState(
        FixitExerciseData.filter(val => val.lesson === 1)
    )

    const clickFixitWord = (e) => {
        setFixitExerciseData(grammarFixit.map(val =>
            val.id === Number(e.currentTarget.id) ? { ...val, visibility: val.visibility === "hidden" ? "visible" : "hidden" } : val
        ))
    }

    const fillInput = (e) => {
        let newGrammarFixit = [...grammarFixit]
        newGrammarFixit[e.currentTarget.id].input = e.currentTarget.value
        setFixitExerciseData(newGrammarFixit)
    }

    return (

        <Frame>
            <FrameHeading>fix it</FrameHeading>
            <Icon src={fixit} />
            {grammarFixit.map((value, index) => (
                <SentenceWrapper key={index}>
                    <Text>{value.beginning}&nbsp;</Text>
                    <BoldWord id={value.id} onClick={clickFixitWord}>{value.bold}&nbsp;</BoldWord>
                    <FixitInput
                        style={{color: value.input === value.correct ? `${colors.greenWord}` : ""}}
                        value={value.input}
                        id={value.id - 1}
                        onInput={fillInput}
                    />
                    <Correct style={{ visibility: value.visibility }}>&nbsp;{value.correct}</Correct>
                    <Text>&nbsp;{value.ending}</Text>
                </SentenceWrapper>
            ))}
        </Frame>

    )
}

export default FixitExercise