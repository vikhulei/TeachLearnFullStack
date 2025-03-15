import { Wrapper, Heading } from "./GrammarStyle"
import Rules from "./01_Rules"
import Exercises from "./02_Exercises"

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