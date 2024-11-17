import { Wrapper, ImageWrapper, Image, ColorLayer, Text } from "./ReadingStyle"
import home from "../../assets/home/home1.jpg"

const Reading = () => {
  return (
    <Wrapper>
      <ColorLayer></ColorLayer>
      <ImageWrapper>
        <Image src={home} />
      </ImageWrapper>
      <Text><u>Reading</u> page is under construction</Text>
    </Wrapper>
  )
}

export default Reading