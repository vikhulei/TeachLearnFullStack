import { FirstWrapper, Image, ColorLayer, SvgWrapper } from "./HomeStyle"
import layer from "../../assets/home/layer.png"
import home from "../../assets/home/home.jpg"


const Home = () => {
  return (
    <FirstWrapper>
      {/* <ColorLayer src={layer}/> */}
      <SvgWrapper>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="rgba(7, 83, 91, 0.55)" />
      </svg>
      </SvgWrapper>
      <Image src={home} />
    </FirstWrapper>
  )
}

export default Home