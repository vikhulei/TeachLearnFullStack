import { FirstWrapper, Image, ContentWrapper, FirstBlock, TextButtonsWrapper, Header, Subheader, ButtonsWrapper, SignUp, LogIn, NextBlock, ImageWrapper, SecondImage } from "./HomeStyle"
import layer from "../../assets/home/layer.png"
import home from "../../assets/home/home.jpg"
import home2 from "../../assets/home/home2.jpg"
import Svg from "./Svg"


const Home = () => {
  return (
    <>
      <FirstWrapper>
        <ImageWrapper>
          <Image src={home} />
        </ImageWrapper>
      </FirstWrapper>
      <ContentWrapper>
        <FirstBlock>
          <Svg />
          <TextButtonsWrapper>
            <Header>ARE YOU LOOKING FOR AN EFFECTIVE WAY TO LEARN ENGLISH?</Header>
            <Subheader>We offer an efficient and user-friendly platform designed to support individual language learning</Subheader>
            <ButtonsWrapper>
              <SignUp>SIGN UP</SignUp>
              <LogIn>LOG IN</LogIn>
            </ButtonsWrapper>
          </TextButtonsWrapper>
        </FirstBlock>
        <NextBlock>
          <SecondImage src={home2} />
        </NextBlock>
      </ContentWrapper>
    </>
  )
}


export default Home
