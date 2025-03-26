import { Wrapper, FrameWrapper, FrameGrammar, Image} from "./01_RulesStyle"
import tobe from "../../../../../assets/02_myprogress/lessons/01/tobe.jpg"
import rules from "../../../../../assets/02_myprogress/lessons/01/reading_rules.jpg"

const Rules = () => {
    return (
        <Wrapper>
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

export default Rules