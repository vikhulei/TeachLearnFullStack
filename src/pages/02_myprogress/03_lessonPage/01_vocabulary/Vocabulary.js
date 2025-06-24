import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Wrapper, Heading, Frame, Word, EngWord, UkrWord } from "./VocabularyStyle"
import { TwoThousand } from "./TwoThousand"


const Vocabulary = () => {

  const currentLesson = useSelector(state => state.lesson.currentLesson)


  const [selectedWords, setSelectedWords] = useState(
    TwoThousand.filter(val => val.id >= currentLesson && val.id < (currentLesson+35))
  )

  const clickWord = (e) => {
    setSelectedWords(selectedWords.map(val =>
        val.id === Number(e.target.id) ? { ...val, visibility_translate: val.visibility_translate === "hidden" ? "visible" : "hidden" } : val
    ))
}
//   const clickWord = (e) => {
//     setSelectedWords(selectedWords.map(val =>
//         val.id === Number(e.target.id) ? { ...val, display_translat: val.display_translat === "none" ? "inline-block" : "none" } : val
//     ))
// }

useEffect(() => {
  setSelectedWords(
    TwoThousand.filter(val => val.id >= (currentLesson*35-34) && val.id <= (currentLesson*35))
  )
}, [currentLesson])

  return (
    <Wrapper>
        <Heading>
        Vocabulary
        </Heading>
        <Frame>
        {selectedWords.map((value, index) => (
                    <Word key={index}>
                      <EngWord id={value.id}>
                      <span style={{fontWeight: "bold"}} id={value.id} onClick={clickWord}>{value.word}</span> <span style={{visibility: value.visibility_translate}}>{value.word_context}</span>
                      </EngWord>
                      <UkrWord style={{visibility: value.visibility_translate}}>
                        <span style={{fontWeight: "bold"}}>{value.translat}</span> {value.translat_context}
                      </UkrWord>
                    </Word>
                ))}
        </Frame>
    </Wrapper>
  )
}

export default Vocabulary