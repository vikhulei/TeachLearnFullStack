import { Wrapper, Block, LastBlock, ImageWrapper, Image, FirstTextBox, SecondTextBox, Header, BodyText, WhoWeAre, FindOutMore } from "./HomeBlock2Style"
import student from "../../../assets/home/student.jpg"
import tutor from "../../../assets/home/tutor.jpg"


const HomeBlock2 = () => {
  return (
    <Wrapper>
      <Block>
        <ImageWrapper>
          <Image src={student} />
        </ImageWrapper>
      </Block>
      <Block>
        <ImageWrapper>
          <Image src={tutor} />
        </ImageWrapper>
      </Block>
      <LastBlock>t</LastBlock>
    </Wrapper>
  )
}


export default HomeBlock2
