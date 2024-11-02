import { FirstWrapper, ImageWrapper, Image, ColorLayer, SvgWrapper, NextBlock, ContentWrapper, } from "./HomeStyle"
import layer from "../../assets/home/layer.png"
import home from "../../assets/home/home.jpg"


const Home = () => {
  return (
    <>
      <FirstWrapper>
        <ImageWrapper>
          <Image src={home} />
        </ImageWrapper>
      </FirstWrapper>
      <ContentWrapper>
        <SvgWrapper>
      <svg width="100%" height="100%">
        <defs>
          <mask id="mask">

            <rect x="0" y="0" width="100%" height="100%" />
            <circle cx="35%" cy="42%" r="20%" />
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" mask="url(#mask)" fill-opacity="0.55" />
      </svg>
    </SvgWrapper>

    <NextBlock>

    </NextBlock>

      </ContentWrapper>
    </>
  )
}


export default Home

          {/* <mask id="mask" x="0" y="0" width="80" height="30"> */}