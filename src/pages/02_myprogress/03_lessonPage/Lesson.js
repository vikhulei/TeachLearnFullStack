import { Wrapper, Header, Heading, SubheadingCapital, FrameWrapper, Frame, Word, Image, FrameGrammar, FrameBoldWord, FrameFillIn, FrameModify, } from "./LessonStyle"
import { TwoThousand } from "../../../components/01_config/TwoThousand"
import tobe from "../../../assets/02_myprogress/lessons/01/tobe.jpg"
import rules from "../../../assets/02_myprogress/lessons/01/reading_rules.jpg"
import { BoldWords } from "./00_exercises/BoldWords"
import Vocabulary from "./01_vocabulary/Vocabulary"
import Grammar from "./02_grammar/Grammar"


const lessonParts = ["Vocabulary", "Grammar", "Reading", "Listening", "Speaking"]

const Lesson = () => {
    return (
        <Wrapper>
            <Header>
                Lesson 3
            </Header>
            <Vocabulary />
            <Grammar />
        </Wrapper>
    )
}

export default Lesson