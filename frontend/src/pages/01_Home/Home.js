import { FirstWrapper, ImageWrapper, Image, ColorLayer, SvgWrapper, NextBlock, ContentWrapper, SecondImage, } from "./HomeStyle"
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
          <Svg />
    <NextBlock>
        <SecondImage src={home2} />
    </NextBlock>
      </ContentWrapper>
    </>
  )
}


export default Home
