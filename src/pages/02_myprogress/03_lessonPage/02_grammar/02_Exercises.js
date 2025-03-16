import { FrameWrapper, Frame, FrameHeading, Icon, SentenceWrapper, Text, BoldWord, FillInSentence, FillInInput, FixitInput } from "./02_ExercisesStyle"
import replace from "../../../../assets/02_myprogress/lessons/replace.png"
import fillin from "../../../../assets/02_myprogress/lessons/fillin.png"
import fixit from "../../../../assets/02_myprogress/lessons/fixit.png"
import { GrammarTranslate } from "../00_exercises/GrammarTranslate"
import { GrammarFillit } from "../00_exercises/GrammarFillit"
import { GrammarFixit} from "../00_exercises/GrammarFixit"

const Exercises = () => {
  return (
    <FrameWrapper>
      <Frame>
        <FrameHeading>replace it</FrameHeading>
        <Icon src={replace} />
        {GrammarTranslate.filter(val => val.lesson === 1).map((value, index) => (
          <SentenceWrapper key={index}>
            <Text>{value.beginning}</Text>
            <BoldWord>{value.word}</BoldWord>
            <Text>{value.ending}</Text>
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