import { useDispatch } from "react-redux"
import { Wrapper, Card, Image, Lesson  } from "./CardsStyle"
import { CardsData } from "./CardsNames"
import { updateLessonNumber } from "../../../features/lessons/lessonSlice"


const Cards = () => {

  const dispatch = useDispatch()

  const assignLesson = (e) => {
    dispatch(updateLessonNumber(e.currentTarget.id))
  }
  
  return (
    <Wrapper>
        {CardsData.map((value, index) => (
            <Card
            id={(index+1)*6-5}
            onClick={assignLesson}
            key={index}
            to="/myprogress/lesson"
            >
                <Image src={value.image} index={index}/>
                <Lesson>{value.title}</Lesson>
            </Card>
        ))}
    </Wrapper>
  )
}

export default Cards