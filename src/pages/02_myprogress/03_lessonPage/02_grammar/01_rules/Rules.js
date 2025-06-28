import { FrameWrapper, Frame, Image, FrameLarge} from "./RulesStyle"
import { RulesData } from "./RulesData"
import { useSelector } from "react-redux"

const Rules = () => {

    const currentLesson = useSelector(state => state.lesson.currentLesson)

    return (
            <FrameWrapper>
                {/* <FrameLarge></FrameLarge> */}
                {RulesData.filter(val => val.lesson === currentLesson).map((value, index) => (
                    <Frame key={index}>
                        <Image src={value.image} />
                    </Frame>
                ))}
            </FrameWrapper>
    )
}

export default Rules