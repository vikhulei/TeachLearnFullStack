import { FirstWrapper, Image, ContentWrapper, FirstBlock, TextButtonsWrapper, Header, Subheader, ButtonsWrapper, SignUp, LogIn, BlockTwoWrapper, ImageWrapper, BlockTwoContentWrapper, BlockTwoGroup, BlockTwoImageWrapper,  BlockTwoImage } from "./HomeStyle"
import layer from "../../assets/home/layer.png"
import home from "../../assets/home/home.jpg"
import home2 from "../../assets/home/home2.jpg"
import Svg from "./Svg"


const Home = () => {
  return (
    <>
      <ContentWrapper>
        <FirstBlock>
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
        </FirstBlock>
        <BlockTwoWrapper>
            <BlockTwoGroup>
              <BlockTwoImageWrapper>
              <BlockTwoImage src={home2} />
              </BlockTwoImageWrapper>
            </BlockTwoGroup>
            <BlockTwoGroup>t</BlockTwoGroup>
            <BlockTwoGroup>t</BlockTwoGroup>
        </BlockTwoWrapper>
      </ContentWrapper>
    </>
  )
}


export default Home
