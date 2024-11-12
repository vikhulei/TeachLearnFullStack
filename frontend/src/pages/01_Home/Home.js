import { FirstWrapper, Image, ContentWrapper, BlockOneWrapper, TextButtonsWrapper, Header, Subheader, ButtonsWrapper, SignUp, LogIn, BlockTwoWrapper, ImageWrapper, BlockTwoContentWrapper, BlockTwoGroup, BlockTwoImageWrapper,  BlockTwoImage } from "./HomeStyle"
import home from "../../assets/home/home1.jpg"
import student from "../../assets/home/student.jpg"
import tutor from "../../assets/home/tutor.jpg"
import Svg from "../01_home/Svg"


const Home = () => {
  return (
    <>
      <ContentWrapper>
        <BlockOneWrapper>
        <ImageWrapper>
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
        </BlockOneWrapper>
        <BlockTwoWrapper>
            <BlockTwoGroup>
              <BlockTwoImageWrapper>
              <BlockTwoImage src={student} />
              </BlockTwoImageWrapper>
            </BlockTwoGroup>

            <BlockTwoGroup>
              <BlockTwoImageWrapper>
              <BlockTwoImage src={tutor} />
              </BlockTwoImageWrapper>
            </BlockTwoGroup>
            <BlockTwoGroup>t</BlockTwoGroup>
        </BlockTwoWrapper>
      </ContentWrapper>
    </>
  )
}


export default Home
