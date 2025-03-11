import { Wrapper, Heading, Frame, Word } from "./VocabularyStyle"
import { TwoThousand } from "../../../../components/01_config/TwoThousand"

const Vocabulary = () => {
  return (
    <Wrapper>
        <Heading>
        Vocabulary
        </Heading>
        <Frame>
        {TwoThousand.filter(val => val.id <= 50).map((value, index) => (
                    <Word key={index}>
                        {value.word}
                    </Word>
                ))}
        </Frame>
    </Wrapper>
  )
}

export default Vocabulary