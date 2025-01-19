import React from 'react'
import { MemorizingWrapper, CircleTextWrapper, Circle, Line, CircleHeading, CircleText } from "./MemorizingStyle"

const Memorizing = () => {
  return (
    <MemorizingWrapper>
    <CircleTextWrapper>
        <Circle>1</Circle>
        <CircleHeading>Record</CircleHeading>
        <CircleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed </CircleText>
    </CircleTextWrapper>
    <CircleTextWrapper>
        <Circle>2</Circle>
        <CircleHeading>Retain</CircleHeading>
        <CircleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed </CircleText>
    </CircleTextWrapper>
    <CircleTextWrapper>
        <Circle>3</Circle>
        <CircleHeading>Retrieve</CircleHeading>
        <CircleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed </CircleText>
    </CircleTextWrapper>
    <Line />
</MemorizingWrapper>
  )
}

export default Memorizing