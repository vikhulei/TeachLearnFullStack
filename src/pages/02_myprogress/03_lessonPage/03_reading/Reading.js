import { WrapperSection, HeadingSection } from "./ReadingStyle"
import ReadingText from "./01_readingtext/ReadingText"
import ReadingSigns from "./02_readingsigns/ReadingSigns"


const Reading = () => {
    return (
        <WrapperSection>
            <HeadingSection>
                Reading
            </HeadingSection>
            <ReadingText />
            <ReadingSigns />
        </WrapperSection>
    )
}

export default Reading

