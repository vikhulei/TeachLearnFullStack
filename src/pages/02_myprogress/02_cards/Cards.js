import { Wrapper, Card, Image, Lesson  } from "./CardsStyle"
import { cardsNames } from "./CardsNames"


const Cards = () => {
  return (
    <Wrapper>
        {cardsNames.map((value, index) => (
            <Card
            key={index}
            to="/myprogress/lesson"
            >
                <Image src={value.image} index={index}/>
                <Lesson>{value.title}</Lesson>
            </Card>
        ))}
    </Wrapper>
  )
}

export default Cards