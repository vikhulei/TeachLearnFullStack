import { Wrapper, ImageWrapper, Image, ColorLayer, Text } from "./SpeakingStyle"
import home from "../../assets/home/home1.jpg"

const Speaking = () => {
  return (
    <Wrapper>
      <ColorLayer></ColorLayer>
      <ImageWrapper>
        <Image src={home} />
      </ImageWrapper>
      <Text><u>Speaking</u> page is under construction</Text>
    </Wrapper>
  )
}

export default Speaking