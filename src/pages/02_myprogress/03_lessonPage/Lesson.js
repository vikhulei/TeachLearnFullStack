import { useSelector } from "react-redux"
import { Wrapper, Header } from "./LessonStyle"
import LessonsRange from "./00_lessons_range/LessonsRange"
import Vocabulary from "./01_vocabulary/Vocabulary"
import Grammar from "./02_grammar/Grammar"
import Reading from "./03_reading/Reading"
import Listening from "./04_listening/Listening"
import Speaking from "./05_speaking/Speaking"


const Lesson = () => {

    const currentLesson = useSelector(state => state.lesson.currentLesson)

    return (
        <Wrapper>
            <Header>
                Lesson {currentLesson}
            </Header>
            <LessonsRange />
            <Vocabulary/>
            <Grammar/>
            <Reading/>
            <Listening/>
            <Speaking/>
        </Wrapper>
    )
}

export default Lesson
