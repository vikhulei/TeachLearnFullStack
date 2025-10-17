import { useState } from "react"
import { Image, Wrapper, TextButtonsWrapper, Header, Subheader, ImageWrapper, ColorLayer } from "./HomeSection1Styles"
import RegisterForm from "./02_forms/RegisterForm"
import home from "./01_images/home.jpg"
import Svg from "./Svg"
import LoginForm from "./02_forms/LoginForm"


const HomeSection1 = () => {

  const [loginVisible, setLoginVisible] = useState(false)
  const [registerVisible, setRegisterVisible] = useState(false)

  const makeRegisterVisible = () => {
    setRegisterVisible(!registerVisible)
  }
  const makeLoginVisible = () => {
    setLoginVisible(!loginVisible)
  }

  return (
    <Wrapper>
      <RegisterForm
      makeRegisterVisible={makeRegisterVisible}
      registerVisible={registerVisible}
      setRegisterVisible={setRegisterVisible}
      />
      <ImageWrapper>
        <Image src={home} />
      </ImageWrapper>
      <ColorLayer />
      <Svg />
      <TextButtonsWrapper>
        <Header>ARE YOU LOOKING FOR AN EFFECTIVE WAY TO LEARN ENGLISH?</Header>
        <Subheader>We offer an efficient and user-friendly platform designed to support individual language learning</Subheader>
        <LoginForm makeRegisterVisible={makeRegisterVisible}/>
        {/* <SigninForm>
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
            <Register
            onClick={makeRegisterVisible}
            >
              Register
            </Register>
            <SignUp>SIGN UP</SignUp>
          </ButtonsWrapper>
        </SigninForm> */}
      </TextButtonsWrapper>
    </Wrapper>
  )
}


export default HomeSection1