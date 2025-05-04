import { Wrapper, Heading, HeadingColor } from "./GrammarStyle"
import Rules from "./01_rules/Rules"
import Exercises from "./02_exercises/Exercises"
import { ContentData } from "../../../04_grammar/01_content/ContentData"
import { useSelector } from "react-redux"

const Grammar = () => {

    const currentLesson = useSelector(state => state.lesson.currentLesson)

    return (
        <Wrapper>
            <Heading>
                Grammar
            </Heading>
            <HeadingColor>{ContentData[currentLesson - 1]}</HeadingColor>
            <Rules />
            <Exercises />
        </Wrapper>
    )
}

export default Grammar