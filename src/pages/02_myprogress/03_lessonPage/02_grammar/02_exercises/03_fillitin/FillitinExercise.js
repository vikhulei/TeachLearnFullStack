import { useState } from "react"
import { FillInInput, Frame, FrameHeading, Icon, SentenceWrapper, Text, Correct } from "./FillitinExerciseStyle"
import { FillitinExerciseData } from "./FillitinExerciseData"
import fillin from "./fillin.png"
import { colors } from "../../../../../../components/01_config/Colors"


const FillitinExercise = () => {

    const [fillitinExerciseData, setFillitinExerciseData] = useState(
        FillitinExerciseData.filter(val => val.lesson === 1)
    )
    const [inputValue, setInputValue] = useState("")

    const clickFillit = (e) => {
        setFillitinExerciseData(fillitinExerciseData.map(val =>
            val.id === Number(e.currentTarget.id) ? { ...val, visibility: val.visibility === "hidden" ? "visible" : "hidden" } : val
        ))
    }

    const fillInput = (e) => {
        let newFillitinExerciseData = [...fillitinExerciseData]
        newFillitinExerciseData[e.target.id].input = e.currentTarget.value
        setFillitinExerciseData(newFillitinExerciseData)
    }

    return (
        <Frame>
            <FrameHeading>
                fill it in
            </FrameHeading>
            <Icon
                src={fillin}
            />
            {fillitinExerciseData.map((value, index) => (
                <SentenceWrapper
                    key={index}
                >
                    <Text
                        onClick={clickFillit}
                        id={value.id}
                    >
                        {value.sentence.sentence}
                    </Text>
                    <FillInInput
                        style={{backgroundColor: value.input === value.translat ? `${colors.green}` : ""}}
                        id={value.id - 1}
                        value={value.input}
                        onInput={fillInput}
                    />
                    <Correct
                        style={{ visibility: value.visibility }}
                    >
                        {value.sentence.translat}
                    </Correct>
                </SentenceWrapper>
            ))}
        </Frame>
    )
}

export default FillitinExercise