import { Wrapper, Header } from "./LessonStyle"
import Vocabulary from "./01_vocabulary/Vocabulary"
import Grammar from "./02_grammar/Grammar"
import { FrameWrapper } from "./02_grammar/01_RulesStyle"
import { Image } from "./02_grammar/02_exercises/ExercisesStyle"
import { ReadingImages } from "./00_exercises/01_reading_texts/ReadingTexts"

const Images = Array.from({ length: 3 }, (_, i) => require(`./00_exercises/01_reading_images/image${i + 1}.jpg`));




const Lesson = () => {
    const clickImage = (e) => {
        console.log(e.currentTarget.getAttribute("data-description"))
    }
    return (
        <Wrapper>
            <Header>
                Lesson 3
            </Header>
            <Vocabulary />
            <Grammar />
                {/* <Image src={tutor}/> */}
                <FrameWrapper>
                    {ReadingImages.map((value, index) => (
                        <Image key={index} src={value.image} id={index} data-description={value.description} onClick={clickImage}/>
                    ))}
                </FrameWrapper>

        </Wrapper>
    )
}

export default Lesson