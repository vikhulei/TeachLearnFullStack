import { Wrapper, SubheadingCapital, FrameWrapper, Frame, FrameGrammar, FrameBoldWord, FrameFillIn, FrameModify, Image, Text, BoldWord } from "./GrammarStyle"
import tobe from "../../../../assets/02_myprogress/lessons/01/tobe.jpg"
import rules from "../../../../assets/02_myprogress/lessons/01/reading_rules.jpg"

const Grammar = () => {
    return (
        <Wrapper>
            <SubheadingCapital>Grammar</SubheadingCapital>
            <FrameWrapper>
                <FrameGrammar>
                    <Image src={tobe} />
                </FrameGrammar>
                <FrameGrammar>
                    <Image src={rules} />
                </FrameGrammar>
            </FrameWrapper>
        </Wrapper>
    )
}

export default Grammar