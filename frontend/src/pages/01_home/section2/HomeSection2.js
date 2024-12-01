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
          <BodyText>Tool supports English learning through online sessions with a tutor or via self-study at their own pace</BodyText>
        </FirstTextBox>
      </FirstBlock>
      <SecondBlock>
        <ImageWrapper>
          <Image src={tutor} />
        </ImageWrapper>
        <SecondTextBox>
          <HeadingCapital>For tutors</HeadingCapital>
          <BodyText>Application is featuring ready-made assignments, texts, dialogues, and various other resources.</BodyText>
        </SecondTextBox>
      </SecondBlock>
      <ThirdBlock>
        <WhoWeAre>Who we are</WhoWeAre>
        <Heading>We provide tutors and students with a powerful tool designed to facilitate effective English language learning.</Heading>
        <BodyTextLastBlock>
          The program is centered on the 2,000 most commonly used English words, which, once mastered, equip individuals to understand and communicate effectively in everyday situations.
        </BodyTextLastBlock>
        <BodyTextLastBlock>
          Tutors will gain access to an application featuring ready-made assignments, texts, dialogues, and various other resources.
        </BodyTextLastBlock>
        <BodyTextLastBlock>
          Students will receive a versatile tool that supports English learning through online sessions with a tutor or via self-study at their own pace.
        </BodyTextLastBlock>
        <FindOutMore>Find Out More...</FindOutMore>
      </ThirdBlock>
    </Wrapper>
  )
}


export default HomeSection2
