import React from 'react'
import { MemorizingWrapper, CircleTextWrapper, Circle, Line, TextWrapper, CircleHeading, CircleText } from "./MemorizingStyle"

const Memorizing = () => {
  return (
    <MemorizingWrapper>
    <CircleTextWrapper>
        <Circle>1</Circle>
        <TextWrapper>
        <CircleHeading>Record</CircleHeading>
        <CircleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed </CircleText>
        </TextWrapper>
    </CircleTextWrapper>
    <CircleTextWrapper>
        <Circle>2</Circle>
        <TextWrapper>
        <CircleHeading>Retain</CircleHeading>
        <CircleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed </CircleText>
        </TextWrapper>
    </CircleTextWrapper>
    <CircleTextWrapper>
        <Circle>3</Circle>
        <TextWrapper>
        <CircleHeading>Retrieve</CircleHeading>
        <CircleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed </CircleText>
        </TextWrapper>
    </CircleTextWrapper>
    <Line />
</MemorizingWrapper>
  )
}

export default Memorizing