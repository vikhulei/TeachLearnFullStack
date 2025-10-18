import { useState } from "react"
import { PreWrapper, Image, Wrapper, TextButtonsWrapper, Header, Subheader, ButtonsWrapper, SignUp, LogIn, ImageWrapper } from "./HomeSection1Styles"
import home from "./01_images/home.jpg"
import test from "../section2/01_images/tutor.jpg"
import Svg from "./Svg"
import LoginForm from "./02_forms/LoginForm"
import SignupForm from "./02_forms/SignupForm"


const HomeSection1 = () => {

  const [loginVisible, setLoginVisible] = useState(false)
  const [signupVisible, setSignupVisible] = useState(false)
  const [homeSectionDimmed, setHomeSectionDimmed] = useState(false)

  const makeLoginVisible = (e) => {
    e.preventDefault()
    setLoginVisible(true)
    setHomeSectionDimmed(true)
  }

  const makeSignupVisible = (e) => {
    e.preventDefault()
    setSignupVisible(true)
    setHomeSectionDimmed(true)
  }

  return (
    <PreWrapper>
      <LoginForm
        loginVisible={loginVisible}
        setLoginVisible={setLoginVisible}
        setHomeSectionDimmed={setHomeSectionDimmed}
      />
      <SignupForm
        signupVisible={signupVisible}
        setSignupVisible={setSignupVisible}
        homeSectionDimmed={homeSectionDimmed}
      />
      <Wrapper
        homeSectionDimmed={homeSectionDimmed}
      >
        <ImageWrapper>
          <Image src={home} />
        </ImageWrapper>
        <Svg />
        <TextButtonsWrapper>
          <Header>ARE YOU LOOKING FOR AN EFFECTIVE WAY TO LEARN ENGLISH?</Header>
          <Subheader>We offer an efficient and user-friendly platform designed to support individual language learning</Subheader>
          <ButtonsWrapper>
            <SignUp
              onClick={makeSignupVisible}
            >SIGN UP</SignUp>
            <LogIn
              onClick={makeLoginVisible}
            >
              LOG IN
            </LogIn>
          </ButtonsWrapper>
        </TextButtonsWrapper>
      </Wrapper>
    </PreWrapper>
  )
}


export default HomeSection1