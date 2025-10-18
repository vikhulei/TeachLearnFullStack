import { useState } from "react"
import { PreWrapper, Image, Wrapper, TextButtonsWrapper, Header, Subheader, ButtonsWrapper, SignUp, LogIn, ImageWrapper } from "./HomeSection1Styles"
import home from "./01_images/home.jpg"
import test from "../section2/01_images/tutor.jpg"
import Svg from "./Svg"
import LoginForm from "./02_forms/LoginForm"


const HomeSection1 = () => {

  const [loginVisible, setLoginVisible] = useState(false)
  const [showResetLink, setShowResetLink] = useState(false)
  const [registerVisible, setRegisterVisible] = useState(false)

  const makeRegisterVisible = () => {
    setRegisterVisible(!registerVisible)
  }
  const makeLoginVisible = (e) => {
    e.preventDefault()
    setLoginVisible(!loginVisible)
    setShowResetLink(false)
  }

  return (
    <PreWrapper>
      <LoginForm
        loginVisible={loginVisible}
        setLoginVisible={setLoginVisible}
        makeLoginVisible={makeLoginVisible}
        showResetLink={showResetLink}
        setShowResetLink={setShowResetLink}
      />
      <Wrapper
        loginVisible={loginVisible}
      >
        <ImageWrapper>
          <Image src={home} />
        </ImageWrapper>
        <Svg />
        <TextButtonsWrapper>
          <Header>ARE YOU LOOKING FOR AN EFFECTIVE WAY TO LEARN ENGLISH?</Header>
          <Subheader>We offer an efficient and user-friendly platform designed to support individual language learning</Subheader>
          <ButtonsWrapper>
            <SignUp>SIGN UP</SignUp>
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