import { useState } from "react"
import { Wrapper, HeadingSection, FrameWrapper, Frame, Image, SentenceWrapper, Question, ListeningInput, Correct } from "./ListeningStyle"
import { ListeningData } from "./ListeningData"
import { colors } from "../../../../components/01_config/Colors"


const Listening = () => {
  const [listeningData, setListeningData] = useState(
    ListeningData.filter(value => value.lesson === 1)
  )
  return (
    <Wrapper>
      <HeadingSection>
        Listening
      </HeadingSection>
      <FrameWrapper>
        {listeningData.map((value, index) => (
          <Frame key={index}>
            <Image src={value.image} />
            {listeningData[0].questions.map((val, ind) => (
              <SentenceWrapper key={ind}>
                <Question
                  id={index}
                  // onClick={clickQuestion}
                >
                  {value.question}
                </Question>
                &nbsp;
                <ListeningInput
                  style={{ color: value.input === value.answer ? `${colors.greenWord}` : "" }}
                  value={value.input}
                  id={index}
                  // onInput={fillInput}
                />
                <Correct style={{ visibility: value.visibility }}>{value.answer}</Correct>
              </SentenceWrapper>
            ))}
          </Frame>
        ))}
      </FrameWrapper>
    </Wrapper>
  )
}

export default Listening