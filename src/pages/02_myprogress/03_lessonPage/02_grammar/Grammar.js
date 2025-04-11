import { Wrapper, Heading } from "./GrammarStyle"
import Rules from "./01_rules/Rules"
import Exercises from "./02_exercises/Exercises"

const Grammar = () => {
    return (
        <Wrapper>
            <Heading>
                Grammar
            </Heading>
            <Rules />
            <Exercises />
        </Wrapper>
    )
}

export default Grammar