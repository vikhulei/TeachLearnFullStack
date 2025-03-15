import { Wrapper, Heading, FrameWrapper, FrameBoldWord, FrameHeading, Icon, SentenceWrapper, Text, BoldWord } from "./GrammarStyle"
import bold_words from "../../../../assets/02_myprogress/lessons/bold_words_blue.png"
import { BoldWords } from "../00_exercises/BoldWords"
import Rules from "./01_Rules"

const Grammar = () => {
    return (
        <Wrapper>
            <Heading>
                Grammar
            </Heading>
            <Rules />
            <FrameWrapper>
                <FrameBoldWord>
                    <FrameHeading>translate</FrameHeading>
                    <Icon src={bold_words} />
                    {BoldWords.filter(val => val.lesson === 1).map((value, index) => (
                        <SentenceWrapper key={index}>
                            <Text>{value.beginning}</Text>
                            <BoldWord>{value.word}</BoldWord>
                            <Text>{value.ending}</Text>
                        </SentenceWrapper>
                    ))}
                </FrameBoldWord>
                <FrameBoldWord>
                    <FrameHeading>insert</FrameHeading>
                    <Icon src={bold_words} />
                    {BoldWords.filter(val => val.lesson === 1).map((value, index) => (
                        <SentenceWrapper key={index}>
                            <Text>{value.beginning}</Text>
                            <BoldWord>{value.word}</BoldWord>
                            <Text>{value.ending}</Text>
                        </SentenceWrapper>
                    ))}
                </FrameBoldWord>
                <FrameBoldWord>
                    <FrameHeading>change</FrameHeading>
                    <Icon src={bold_words} />
                    {BoldWords.filter(val => val.lesson === 1).map((value, index) => (
                        <SentenceWrapper key={index}>
                            <Text>{value.beginning}</Text>
                            <BoldWord>{value.word}</BoldWord>
                            <Text>{value.ending}</Text>
                        </SentenceWrapper>
                    ))}
                </FrameBoldWord>
            </FrameWrapper>
        </Wrapper>
    )
}

export default Grammar