import { WrapperSection, HeadingSection } from "../LessonStyle"
import Rules from "./01_rules/01_Rules"
import Exercises from "./02_exercises/Exercises"

const Grammar = () => {
    return (
        <WrapperSection>
            <HeadingSection>
                Grammar
            </HeadingSection>
            <Rules />
            <Exercises />
        </WrapperSection>
    )
}

export default Grammar