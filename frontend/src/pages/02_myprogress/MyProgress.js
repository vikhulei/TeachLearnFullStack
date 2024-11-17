import { Wrapper, ImageWrapper, Image, ColorLayer, Text } from "./MyProgressStyle"
import home from "../../assets/home/home1.jpg"

const MyProgress = () => {
  return (
    <Wrapper>
      <ColorLayer></ColorLayer>
      <ImageWrapper>
        <Image src={home} />
      </ImageWrapper>
      <Text><u>My progress</u> page is under construction</Text>
    </Wrapper>
  )
}

export default MyProgress