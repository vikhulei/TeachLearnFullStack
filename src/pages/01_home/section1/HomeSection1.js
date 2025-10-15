import { Image, Wrapper, SigninForm, Username, TextButtonsWrapper, Header, Subheader, ButtonsWrapper, RegisterWrapper, LogIn, ImageWrapper, ColorLayer, Password, Caption, InputWrapper, LostPassword, Register } from "./HomeSection1Style"
import RegisterForm from "./RegisterForm"
import home from "./01_images/home.jpg"
import Svg from "./Svg"


const HomeSection1 = () => {
  return (
    <Wrapper>
      <RegisterForm/>
      <ImageWrapper>
        <Image src={home} />
      </ImageWrapper>
      <ColorLayer />
      <Svg />
      <TextButtonsWrapper>
        <Header>ARE YOU LOOKING FOR AN EFFECTIVE WAY TO LEARN ENGLISH?</Header>
        <Subheader>We offer an efficient and user-friendly platform designed to support individual language learning</Subheader>
        <SigninForm>
          <InputWrapper>
            <Caption>Username:</Caption>
            <Username />
          </InputWrapper>
          <InputWrapper>
            <Caption>Password:</Caption>
            <Password />
            <LostPassword>Lost password?</LostPassword>
          </InputWrapper>
          <ButtonsWrapper>
            <LogIn>Log in</LogIn>
            <Register>Register</Register>
            {/* <SignUp>SIGN UP</SignUp> */}
          </ButtonsWrapper>
        </SigninForm>
      </TextButtonsWrapper>
    </Wrapper>
  )
}


export default HomeSection1