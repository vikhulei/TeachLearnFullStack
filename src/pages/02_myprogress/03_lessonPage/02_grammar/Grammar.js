import { Wrapper, Heading, FrameWrapper, FrameGrammar, FrameBoldWord, FrameHeading, FrameFillIn, FrameModify, Image, Icon, SentenceWrapper, Text, BoldWord } from "./GrammarStyle"
import tobe from "../../../../assets/02_myprogress/lessons/01/tobe.jpg"
import rules from "../../../../assets/02_myprogress/lessons/01/reading_rules.jpg"
import bold_words from "../../../../assets/02_myprogress/lessons/bold_words_blue.png"
import { BoldWords } from "../00_exercises/BoldWords"

const Grammar = () => {
    return (
        <Wrapper>
            <Heading>
                Grammar
            </Heading>
            <FrameWrapper>
                <FrameGrammar>
                    <Image src={tobe} />
                </FrameGrammar>
                <FrameGrammar>
                    <Image src={rules} />
                </FrameGrammar>
            </FrameWrapper>
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