import { Wrapper, MyRoadmapWrapper, Header, CurrentLessonButton, Title, MainText } from "./MyProgressStyle"
import Roadmap from "./01_roadmap/Roadmap"

const MyProgress = () => {
  return (
    <Wrapper>
        <Header>
          My Progress
        </Header>
        <MyRoadmapWrapper>
        <CurrentLessonButton>Current Lesson</CurrentLessonButton>
        <Title>My Roadmap</Title>
        <MainText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.
        </MainText>
      </MyRoadmapWrapper>
      <Roadmap />
    </Wrapper>
  )
}

export default MyProgress