import { } from "./02_ExercisesStyle"
import { FrameWrapper, Frame, FrameHeading, Icon, SentenceWrapper, Text, BoldWord } from "./02_ExercisesStyle"
import bold_words from "../../../../assets/02_myprogress/lessons/bold_words_blue.png"
import { BoldWords } from "../00_exercises/BoldWords"

const Exercises = () => {
  return (
    <FrameWrapper>
      <Frame>
        <FrameHeading>replace it</FrameHeading>
        <Icon src={bold_words} />
        {BoldWords.filter(val => val.lesson === 1).map((value, index) => (
          <SentenceWrapper key={index}>
            <Text>{value.beginning}</Text>
            <BoldWord>{value.word}</BoldWord>
            <Text>{value.ending}</Text>
          </SentenceWrapper>
        ))}
      </Frame>
      <Frame>
        <FrameHeading>fill it in</FrameHeading>
        <Icon src={bold_words} />
        {BoldWords.filter(val => val.lesson === 1).map((value, index) => (
          <SentenceWrapper key={index}>
            <Text>{value.beginning}</Text>
            <BoldWord>{value.word}</BoldWord>
            <Text>{value.ending}</Text>
          </SentenceWrapper>
        ))}
      </Frame>
      <Frame>
        <FrameHeading>fix it</FrameHeading>
        <Icon src={bold_words} />
        {BoldWords.filter(val => val.lesson === 1).map((value, index) => (
          <SentenceWrapper key={index}>
            <Text>{value.beginning}</Text>
            <BoldWord>{value.word}</BoldWord>
            <Text>{value.ending}</Text>
          </SentenceWrapper>
        ))}
      </Frame>
    </FrameWrapper>
  )
}

export default Exercises