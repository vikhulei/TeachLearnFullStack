import { Wrapper, ImageWrapper, Image, ColorLayer, Text } from "./ContactsStyle"
import home from "./home.jpg"

const Contacts = () => {
  return (
    <Wrapper>
      <ColorLayer></ColorLayer>
      <ImageWrapper>
        <Image src={home} />
      </ImageWrapper>
      <Text><u>Contacts</u> page is under construction</Text>
    </Wrapper>
  )
}

export default Contacts