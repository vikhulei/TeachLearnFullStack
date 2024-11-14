import { Wrapper, Block, LastBlock, ImageWrapper, Image, FirstTextBox, SecondTextBox, Heading, BodyText, WhoWeAre, HeadingCapital, FindOutMore } from "./HomeBlock2Style"
import student from "../../../assets/home/student.jpg"
import tutor from "../../../assets/home/tutor.jpg"


const HomeBlock2 = () => {
  return (
    <Wrapper>
      <Block>
        <ImageWrapper>
          <Image src={student} />
        </ImageWrapper>
        <FirstTextBox>
          <HeadingCapital>For students</HeadingCapital>
          <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod</BodyText>
        </FirstTextBox>
      </Block>
      <Block>
        <ImageWrapper>
          <Image src={tutor} />
        </ImageWrapper>
        <SecondTextBox>
          s
        </SecondTextBox>
      </Block>
      <LastBlock>t</LastBlock>
    </Wrapper>
  )
}


export default HomeBlock2
