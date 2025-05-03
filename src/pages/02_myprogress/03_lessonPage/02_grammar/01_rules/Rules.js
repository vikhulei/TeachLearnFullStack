import { FrameWrapper, Frame, Image} from "./RulesStyle"
import { RulesData } from "./RulesData"
import { useSelector } from "react-redux"

const Rules = () => {

    const currentLesson = useSelector(state => state.lesson.currentLesson)

    console.log(RulesData)

    return (
            <FrameWrapper>
                {RulesData.filter(val => val.lesson === currentLesson).map((value, index) => (
                    <Frame key={index}>
                        {value.title}
                        <Image src={value.image} />
                    </Frame>
                ))}
            </FrameWrapper>
    )
}

export default Rules