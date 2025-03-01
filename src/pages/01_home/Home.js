import HomeSection1 from "./section1/HomeSection1"
import HomeBlock2 from "./section2/HomeSection2"
import { Wrapper } from "./HomeStyle"


const Home = () => {
  return (
    <Wrapper>
      <HomeSection1 />
      <HomeBlock2 />
    </Wrapper>
  )
}


export default Home
