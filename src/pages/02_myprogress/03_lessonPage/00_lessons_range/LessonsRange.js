import { useSelector } from "react-redux"
import { Wrapper, Circle } from "./LessonsRangeStyle"

const LessonsRange = () => {
    const start = Number(useSelector((state) => state.lesson.value))

    const lessonsNumber = Array.from({ length: 6 }, (_, i) => start + i)

    return (
        <Wrapper>
            {lessonsNumber.map((value) => (
                <div key={value}>
                    <Circle>{value}</Circle>
                </div>
            ))}
        </Wrapper>
    )
}

export default LessonsRange