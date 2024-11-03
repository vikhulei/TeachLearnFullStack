import { FirstWrapper, ImageWrapper, Image, ColorLayer, SvgWrapper, NextBlock, ContentWrapper, } from "./HomeStyle"
import layer from "../../assets/home/layer.png"
import home from "../../assets/home/home.jpg"
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

    </NextBlock>

      </ContentWrapper>
    </>
  )
}


export default Home
