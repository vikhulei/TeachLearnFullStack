import { Wrapper, SubheadingCapital, FrameWrapper, Frame, FrameGrammar, FrameBoldWord, FrameFillIn, FrameModify, Image, SentenceWrapper, Text, BoldWord } from "./GrammarStyle"
import tobe from "../../../../assets/02_myprogress/lessons/01/tobe.jpg"
import rules from "../../../../assets/02_myprogress/lessons/01/reading_rules.jpg"
import { BoldWords } from "../00_exercises/BoldWords"

const Grammar = () => {
    return (
        <Wrapper>
            <SubheadingCapital>
                Grammar
            </SubheadingCapital>
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
                {BoldWords.filter(val => val.lesson === 1).map((value, index) => (
                    <SentenceWrapper key={index}>
                        <Text>{value.beginning}</Text>
                        <BoldWord>{value.word}</BoldWord>
                        <Text>{value.ending}</Text>
                    </SentenceWrapper>
                ))}
            </FrameBoldWord>
            <FrameBoldWord>
                {BoldWords.filter(val => val.lesson === 1).map((value, index) => (
                    <SentenceWrapper key={index}>
                        <Text>{value.beginning}</Text>
                        <BoldWord>{value.word}</BoldWord>
                        <Text>{value.ending}</Text>
                    </SentenceWrapper>
                ))}
            </FrameBoldWord>
            <FrameBoldWord>
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