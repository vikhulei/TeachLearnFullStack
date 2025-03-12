import { Wrapper, Header } from "./LessonStyle"
import Vocabulary from "./01_vocabulary/Vocabulary"
import Grammar from "./02_grammar/Grammar"

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