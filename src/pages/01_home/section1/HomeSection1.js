import { Image, Wrapper, TextButtonsWrapper, Header, Subheader, ButtonsWrapper, SignUp, LogIn, ImageWrapper, ColorLayer } from "./HomeSection1Style"
import home from "../../../assets/01_home/home.jpg"
import Svg from "./Svg"


const HomeSection1 = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <ColorLayer />
        <Image src={home} />
      </ImageWrapper>
      <Svg />
      <TextButtonsWrapper>
        <Header>ARE YOU LOOKING FOR AN EFFECTIVE WAY TO LEARN ENGLISH?</Header>
        <Subheader>We offer an efficient and user-friendly platform designed to support individual language learning</Subheader>
        <ButtonsWrapper>
          <SignUp>SIGN UP</SignUp>
          <LogIn>LOG IN</LogIn>
        </ButtonsWrapper>
      </TextButtonsWrapper>
    </Wrapper>
  )
}


export default HomeSection1