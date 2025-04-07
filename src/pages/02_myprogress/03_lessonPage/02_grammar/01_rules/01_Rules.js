import { FrameWrapper, Frame, Image} from "./01_RulesStyle"
import { RulesData } from "./RulesData"

const Rules = () => {
    return (
            <FrameWrapper>
                {RulesData.filter(val => val.lesson === 1).map((value, index) => (
                    <Frame key={index}>
                        <Image src={value.image} />
                    </Frame>
                ))}
            </FrameWrapper>
    )
}

export default Rules