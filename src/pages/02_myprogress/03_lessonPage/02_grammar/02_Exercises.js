import { useState } from "react"
import { FrameWrapper, Frame, FrameHeading, Icon, SentenceWrapper, Text, BoldWord, FillInSentence, FillInInput, FixitInput, EngWord, UkrWord } from "./02_ExercisesStyle"
import replace from "../../../../assets/02_myprogress/lessons/replace.png"
import fillin from "../../../../assets/02_myprogress/lessons/fillin.png"
import fixit from "../../../../assets/02_myprogress/lessons/fixit.png"
import { GrammarTranslate } from "../00_exercises/GrammarTranslate"
import { GrammarFillit } from "../00_exercises/GrammarFillit"
import { GrammarFixit} from "../00_exercises/GrammarFixit"

const Exercises = () => {

    const [grammarTranslate, setGrammarTranslate] = useState(
      GrammarTranslate.filter(val => val.id <= 35)
    )

  const clickWord = (e) => {
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
            <BoldWord id={value.id} onClick={clickWord}>
               
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
      <Frame>
        <FrameHeading>fix it</FrameHeading>
        <Icon src={fixit} />
        {GrammarFixit.filter(val => val.lesson === 1).map((value, index) => (
          <SentenceWrapper key={index}>
            <Text>{value.beginning}</Text>
            <BoldWord>{value.bold}</BoldWord>
            <FixitInput />
            <Text>{value.ending}</Text>
          </SentenceWrapper>
        ))}
      </Frame>
      <Frame>
        <FrameHeading>fill it in</FrameHeading>
        <Icon src={fillin} />
        {GrammarFillit.filter(val => val.lesson === 1).map((value, index) => (
          <SentenceWrapper key={index}>
            <FillInSentence>{value.sentence}</FillInSentence>
            <FillInInput />
          </SentenceWrapper>
        ))}
      </Frame>
    </FrameWrapper>
  )
}

export default Exercises