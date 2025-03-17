import { useState } from "react"
import { Wrapper, Heading, Frame, Word, EngWord, UkrWord } from "./VocabularyStyle"
import { TwoThousand } from "../../../../components/01_config/TwoThousand"
// import Word from "./01_Word"


const Vocabulary = () => {

  const [selectedWords, setSelectedWords] = useState(
    TwoThousand.filter(val => val.id <= 35)
  )

  const clickWord = (e) => {
    setSelectedWords(selectedWords.map(val =>
        val.id === Number(e.target.id) ? { ...val, visibility: val.visibility === "hidden" ? "visible" : "hidden" } : val
    ))
}

  return (
    <Wrapper>
        <Heading>
        Vocabulary
        </Heading>
        <Frame>
        {selectedWords.map((value, index) => (
                    <Word key={index} onClick={clickWord}>
                      <EngWord>
                      {value.word}
                      </EngWord>
                      <UkrWord style={{visibility: value.visibility}}>
                        {value.translat}
                      </UkrWord>

                      {/* <EngWord>
                        {value.word}
                      </EngWord>
                      <UkrWord>
                        {value.translat}
                      </UkrWord> */}
                    </Word>
                ))}
        </Frame>
    </Wrapper>
  )
}

export default Vocabulary