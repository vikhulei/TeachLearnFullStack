import { Wrapper, ImageWrapper, Image, ColorLayer, Text } from "./ReadingStyle"
import home from "../../assets/01_home/home.jpg"

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