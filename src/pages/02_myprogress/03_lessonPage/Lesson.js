import { Wrapper, Header } from "./LessonStyle"
import Vocabulary from "./01_vocabulary/Vocabulary"
import Grammar from "./02_grammar/Grammar"
import Reading from "./03_reading/Reading"


const Lesson = () => {
    return (
        <Wrapper>
            <Header>
                Lesson 3
            </Header>
            <Vocabulary />
            <Grammar />
            <Reading />

        </Wrapper>
    )
}

export default Lesson


                // <FrameWrapper>
                //     {ReadingImages.map((value, index) => (
                //         <Image key={index} src={value.image} id={index} data-description={value.description} onClick={clickImage}/>
                //     ))}
                // </FrameWrapper>