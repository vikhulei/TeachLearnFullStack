import { Wrapper, FirstBlock, SecondBlock, ThirdBlock, ImageWrapper, Image, FirstTextBox, SecondTextBox, Heading, BodyText, WhoWeAre, HeadingCapital, BodyTextLastBlock, FindOutMore } from "./HomeSection2Style"
import student from "./01_images/student.jpg"
import tutor from "./01_images/tutor.jpg"


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
          The program is centered on the 1,000 most commonly used English words, which, once learned, equip individuals to understand and communicate effectively in everyday situations.
        </BodyTextLastBlock>
        <BodyTextLastBlock>
          Mastering the basics of the language is achieved through a five-facet approach: learning vocabulary, reading texts, listening to speech, practicing speaking, and studying grammar. Each facet is built around the same core set of 1,000 most common words.
        </BodyTextLastBlock>
        <FindOutMore>Find Out More...</FindOutMore>
      </ThirdBlock>
    </Wrapper>
  )
}


export default HomeSection2
