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

            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <circle cx="35%" cy="42%" r="20%" fill="black" />
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" mask="url(#mask)" fill="rgba(7, 83, 91, 0.65)"  />
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
                      {/* <rect x="0" y="0" width="100%" height="100%" /> */}