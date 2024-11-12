import { Wrapper, Group, ImageWrapper, Image, } from "./HomeBlock2Style"
import student from "../../../assets/home/student.jpg"
import tutor from "../../../assets/home/tutor.jpg"


const HomeBlock2 = () => {
  return (
    <Wrapper>
      <Group>
        <ImageWrapper>
          <Image src={student} />
        </ImageWrapper>
      </Group>
      <Group>
        <ImageWrapper>
          <Image src={tutor} />
        </ImageWrapper>
      </Group>
      <Group>t</Group>
    </Wrapper>
  )
}


export default HomeBlock2
