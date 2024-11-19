import { Wrapper, FirstBlock, SecondBlock, ThirdBlock, ImageWrapper, Image, FirstTextBox, SecondTextBox, Heading, BodyText, WhoWeAre, HeadingCapital, BodyTextLastBlock, FindOutMore } from "./HomeSection2Style"
import student from "../../../assets/01_home/student.jpg"
import tutor from "../../../assets/01_home/tutor.jpg"


const HomeSection2 = () => {
  return (
    <Wrapper>
      <FirstBlock>
        <ImageWrapper>
          <Image src={student} />
        </ImageWrapper>
        <FirstTextBox>
          <HeadingCapital>For students</HeadingCapital>
          <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod</BodyText>
        </FirstTextBox>
      </FirstBlock>
      <SecondBlock>
        <ImageWrapper>
          <Image src={tutor} />
        </ImageWrapper>
        <SecondTextBox>
        <HeadingCapital>For tutors</HeadingCapital>
        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod</BodyText>
        </SecondTextBox>
      </SecondBlock>
      <ThirdBlock>
        <WhoWeAre>Who we are</WhoWeAre>
        <Heading>We focus on bringing value and solve business challenges through the delivery of modern IT services and solutions</Heading>
        <BodyTextLastBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.
        </BodyTextLastBlock>
        <FindOutMore>Find Out More...</FindOutMore>
      </ThirdBlock>
    </Wrapper>
  )
}


export default HomeSection2
