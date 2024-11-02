import { FirstWrapper, Image, ColorLayer, SvgWrapper } from "./HomeStyle"
import layer from "../../assets/home/layer.png"
import home from "../../assets/home/home.jpg"


const Home = () => {
  return (
    <FirstWrapper>
<SvgWrapper>
    <svg width="100%" height="100%" top="0" left="0">
      <mask id="circle">
        <circle fill="white" cx="33vw" cy="50vh" r="220"></circle>
      </mask>
      <image height="100%" width="100%" preserveAspectRatio="xMinYMin slice" xlinkHref={home} mask="url(#circle)"></image>
    </svg>

</SvgWrapper>
    </FirstWrapper>
  )
}

export default Home