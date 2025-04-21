import { Wrapper, Circle } from "./LessonsRangeStyle"

const LessonsRange = () => {
    let i = 7
    const lessonsNumber = Array.from({ length: 6 }, (_, i=7) => i + 1)

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