import HomeBlock1 from "./section1/HomeBlock1"
import HomeBlock2 from "./section2/HomeBlock2"
import { ContentWrapper } from "./HomeStyle"


const Home = () => {
  return (
    <ContentWrapper>
      <HomeBlock1 />
      <HomeBlock2 />
    </ContentWrapper>
  )
}


export default Home
