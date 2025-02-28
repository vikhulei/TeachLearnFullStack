import { Wrapper, Card, Image, Lesson  } from "./CardsStyle"
import progress1 from "../../../assets/02_myprogress/progress1.jpg"

const Cards = () => {
  return (
    <Wrapper>
        <Card>
            <Image src={progress1} />
            <Lesson>
                Lessons 1-8
            </Lesson>
        </Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </Wrapper>
  )
}

export default Cards