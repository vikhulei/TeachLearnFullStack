import { Wrapper, ImageWrapper, Image, ColorLayer, Text } from "./GrammarStyle"
import home from "../../assets/home/home1.jpg"

const Grammar = () => {
  return (
    <Wrapper>
      <ColorLayer></ColorLayer>
      <ImageWrapper>
        <Image src={home} />
      </ImageWrapper>
      <Text><u>Grammar</u> page is under construction</Text>
    </Wrapper>
  )
}

export default Grammar