import { BoldWord, Frame, FrameHeading, Icon, SentenceWrapper, Text } from "../ExercisesStyle"
import { FixitInput } from "./FixitStyle"
import fixit from "../../../../../../assets/02_myprogress/lessons/fixit.png"
import { GrammarFixit } from "../../../00_exercises/GrammarFixit"

const Fixit = () => {
  return (

    <Frame>
    <FrameHeading>fix it</FrameHeading>
    <Icon src={fixit} />
    {GrammarFixit.filter(val => val.lesson === 1).map((value, index) => (
      <SentenceWrapper key={index}>
        <Text>{value.beginning}&nbsp;</Text>
        <BoldWord>{value.bold}&nbsp;</BoldWord>
        <FixitInput/>
        <span>&nbsp;{value.correct}</span>
        <Text>&nbsp;{value.ending}</Text>
      </SentenceWrapper>
    ))}
  </Frame>

)
}

export default Fixit