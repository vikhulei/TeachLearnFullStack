import { useState } from "react"
import { BoldWord, Frame, FrameHeading, Icon, SentenceWrapper, Text, Correct } from "../ExercisesStyle"
import { FixitInput } from "./FixitStyle"
import fixit from "../../../../../../assets/02_myprogress/lessons/fixit.png"
import { GrammarFixit } from "../../../00_exercises/GrammarFixit"

const Fixit = () => {

    const [grammarFixit, setGrammarFixit] = useState(
        GrammarFixit.filter(val => val.lesson === 1)
    )

    const clickFixitWord = (e) => {
        setGrammarFixit(grammarFixit.map(val =>
            val.id === Number(e.currentTarget.id) ? { ...val, visibility: val.visibility === "hidden" ? "visible" : "hidden"} : val
        ))
    }

    return (

        <Frame>
            <FrameHeading>fix it</FrameHeading>
            <Icon src={fixit} />
            {grammarFixit.map((value, index) => (
                <SentenceWrapper key={index}>
                    <Text>{value.beginning}&nbsp;</Text>
                    <BoldWord id={value.id} onClick={clickFixitWord}>{value.bold}&nbsp;</BoldWord>
                    <FixitInput />
                    <Correct style={{visibility: value.visibility}}>&nbsp;{value.correct}</Correct>
                    <Text>&nbsp;{value.ending}</Text>
                </SentenceWrapper>
            ))}
        </Frame>

    )
}

export default Fixit