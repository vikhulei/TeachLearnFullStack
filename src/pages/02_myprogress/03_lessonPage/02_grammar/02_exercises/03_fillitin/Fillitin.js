import { useState } from "react"
import {  } from "./FillitinStyle"
import { FillInInput, FillInSentence, Frame, FrameHeading, Icon, SentenceWrapper, Correct } from "../ExercisesStyle"
import { GrammarFillit } from "../../../00_exercises/GrammarFillit"
import fillin from "../../../../../../assets/02_myprogress/lessons/fillin.png"


const Fillitin = () => {

  return (
    <Frame>
    <FrameHeading>fill it in</FrameHeading>
    <Icon src={fillin} />
    {GrammarFillit.filter(val => val.lesson === 1).map((value, index) => (
      <SentenceWrapper key={index}>
        <FillInSentence>{value.sentence}</FillInSentence>
        <FillInInput />
        <Correct style={{visibility: value.visibility}}>{value.translat}</Correct>
      </SentenceWrapper>
    ))}
  </Frame>
  )
}

export default Fillitin