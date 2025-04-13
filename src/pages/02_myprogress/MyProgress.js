import { Wrapper, MyRoadmapWrapper, Header, CurrentLessonButton, TitleWrapper, Title, MainText } from "./MyProgressStyle"
import Roadmap from "./01_roadmap/Roadmap"
import Cards from "./02_cards/Cards"
import { useDispatch } from "react-redux"
import { updateLessonNumber } from "../../features/lessons/lessonSlice"

const MyProgress = () => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <Header>
        My Progress
      </Header>
      <MyRoadmapWrapper>
        <TitleWrapper>
          <Title>My Roadmap</Title>
          <CurrentLessonButton onClick={() => dispatch(updateLessonNumber("New Test"))}>Current Lesson</CurrentLessonButton>
        </TitleWrapper>
        <MainText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet libero id nisi euismod, sed porta est consectetur. Vestibulum auctor felis eget orci semper vestibulum. Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus ac, finibus vitae dui.
        </MainText>
        <Roadmap />
      </MyRoadmapWrapper>
      <Cards />
    </Wrapper>
  )
}

export default MyProgress