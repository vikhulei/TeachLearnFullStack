import { useState } from "react"
import { FrameWrapper, Frame, FrameHeading, Icon, SentenceWrapper, Text, BoldWord, EngWord, UkrWord } from "./ExercisesStyle"
import replace from "../../../../../assets/02_myprogress/lessons/replace.png"
import { GrammarReplace } from "../../00_exercises/GrammarReplace"
import Fixit from "./02_fixit/Fixit"
import Fillitin from "./03_fillitin/Fillitin"
import { ReadingText } from "../../00_exercises/ReadingText"
import { ReadingImages } from "../../00_exercises/01_reading_texts/ReadingTexts"

const Exercises = () => {

    const [grammarTranslate, setGrammarTranslate] = useState(
      GrammarReplace.filter(val => val.id <= 35)
    )

  const clickReplaceWord = (e) => {
    setGrammarTranslate(grammarTranslate.map(val =>
        val.id === Number(e.currentTarget.id) ? { ...val, display_translat: val.display_translat === "none" ? "block" : "none", display_word: val.display_word === "block" ? "none" : "block"} : val
    ))
}

  return (
    <FrameWrapper>
      <Frame>
        <FrameHeading>replace it</FrameHeading>
        <Icon src={replace} />
        {grammarTranslate.filter(val => val.lesson === 1).map((value, index) => (
          <SentenceWrapper key={index}>
            <Text>{value.beginning}&nbsp;</Text>
            <BoldWord id={value.id} onClick={clickReplaceWord}>
               
              <EngWord name={value.display_word} style={{display: value.display_word}}>
              {value.word} 
              </EngWord>
              <UkrWord style={{display: value.display_translat}}>
                {value.translat}
              </UkrWord>

            </BoldWord>
            <Text>&nbsp;{value.ending}</Text>
          </SentenceWrapper>
        ))}
      </Frame>
      <Fixit />
      <Fillitin />
      <Frame>
        <Text style={{whiteSpace: "pre-wrap", lineHeight: "2"}}>
          {ReadingText[0].text}
        </Text>
      </Frame>
    </FrameWrapper>
  )
}

export default Exercises