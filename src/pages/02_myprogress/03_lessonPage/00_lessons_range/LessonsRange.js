import { useSelector, useDispatch } from "react-redux"
import { Wrapper, Circle } from "./LessonsRangeStyle"
import { updateCurrentLesson } from "../../../../features/lessons/lessonSlice"


const LessonsRange = () => {

    const dispatch = useDispatch()

    const start = Number(useSelector((state) => state.lesson.lessonsRange))

    const lessonsNumber = Array.from({ length: 6 }, (_, i) => start + i)

    return (
        <Wrapper>
            {lessonsNumber.map((value) => (
                <div key={value}>
                    <Circle
                        id={value}
                        onClick={() => dispatch(updateCurrentLesson(Number(value)))}
                    >
                        {value}
                    </Circle>
                </div>
            ))}
        </Wrapper>
    )
}

export default LessonsRange