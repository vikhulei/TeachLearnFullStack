import { Wrapper, Header } from "./LessonStyle"
import Vocabulary from "./01_vocabulary/Vocabulary"
import Grammar from "./02_grammar/Grammar"
// import { ReadingImages } from "./00_exercises/01_reading_images/ReadingImages"
import { FrameWrapper } from "./02_grammar/01_RulesStyle"
import { Image } from "./02_grammar/02_exercises/ExercisesStyle"
import tutor from "./00_exercises/01_reading_images/tutor.jpg"
import { FaRegNewspaper } from "react-icons/fa"

const ReadingImages = [
    {id: 1, lesson: 1, im: "./00_exercises/01_reading_images/home.jpg"},
    {id: 2, lesson: 1, im: "./00_exercises/01_reading_images/student.jpg"},
    {id: 3, lesson: 1, im: "./00_exercises/01_reading_images/tutor.jpg"},
]


const Lesson = () => {
    return (
        <Wrapper>
            <Header>
                Lesson 3
            </Header>
            <Vocabulary />
            <Grammar />
                <Image src={tutor}/>
                {ReadingImages.map((value, index) => (
                    <FrameWrapper key={index}>

                    <Image src={value.im}/>
                    <div>{value.id}</div>
                    </FrameWrapper>
                ))}
        </Wrapper>
    )
}

export default Lesson