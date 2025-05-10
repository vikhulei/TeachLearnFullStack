import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Frame, FrameHeading, Icon, SentenceWrapper, Text, BoldWord, EngWord, UkrWord, BoldWordWrapper  } from "./ReplaceitExerciseStyle"
import replace from "./replace.png"
import { ReplaceitExerciseData } from "./ReplaceitExerciseData"

const ReplaceitExercise = () => {

    // const currentLesson = 2
    const currentLesson = useSelector(state => state.lesson.currentLesson)

    const [replaceitExerciseData, setReplaceitExerciseData] = useState(
      ReplaceitExerciseData.filter(val => val.lesson === currentLesson)
    )

  const clickReplaceWord = (e) => {
    setReplaceitExerciseData(replaceitExerciseData.map(val =>
        val.id === Number(e.currentTarget.id) ? { ...val, display_translat: val.display_translat === "none" ? "block" : "none", display_word: val.display_word === "block" ? "none" : "block"} : val
    ))
}

useEffect(() => {
    setReplaceitExerciseData(ReplaceitExerciseData.filter(val => val.lesson === currentLesson))
}, [currentLesson])


    return (
        <Frame>
            <FrameHeading>replace it</FrameHeading>
            <Icon src={replace} />
            {replaceitExerciseData.map((value, index) => (
                <SentenceWrapper key={index}>
                    <Text>{value.sentence.beginning}&nbsp;</Text>
                    <BoldWordWrapper id={value.id} onClick={clickReplaceWord}>

                        <BoldWord name={value.display_word} style={{ display: value.display_word }}>
                            {value.sentence.word}
                        </BoldWord>
                        <BoldWord style={{ display: value.display_translat }}>
                            {value.sentence.translat}
                        </BoldWord>
                    </BoldWordWrapper>
                    <Text>&nbsp;{value.sentence.ending}</Text>
                </SentenceWrapper>
            ))}
        </Frame>
    )
}

export default ReplaceitExercise