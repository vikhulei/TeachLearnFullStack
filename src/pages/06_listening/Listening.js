import { Wrapper, ImageWrapper, Image, ColorLayer, Text } from "./ListeningStyle"
import home from "./home.jpg"

const Listening = () => {
  return (
    <Wrapper>
      <ColorLayer></ColorLayer>
      <ImageWrapper>
        <Image src={home} />
      </ImageWrapper>
      <Text><u>Listening</u> page is under construction</Text>
    </Wrapper>
  )
}

export default Listening