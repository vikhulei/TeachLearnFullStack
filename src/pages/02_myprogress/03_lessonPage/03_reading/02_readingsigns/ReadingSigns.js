import { useState } from "react"
import { FrameWrapper, Frame, SignImage, Correct } from "./ReadingSignsStyle"
import { ReadingSignsData } from "./ReadingSignsData"

const Signs = () => {

    const [signData, setSignData] = useState(
        ReadingSignsData.filter(val => val.lesson === 1)
    )

    const showCaption = (e) => {
        e.preventDefault()
        setSignData(signData.map(value => 
            value.id === Number(e.currentTarget.id) ? {...value, visibility: value.visibility === "hidden" ? "visible" : "hidden"} : value
        ))
    }

  return (
    <FrameWrapper>
        {signData.map((value, index) => (
            <Frame key ={index}>
                <SignImage
                src={value.image}
                id={value.id}
                onClick={showCaption}
                />
                <Correct style={{visibility: value.visibility}}>{value.caption}</Correct>
            </Frame>
        ))}
    </FrameWrapper>
  )
}

export default Signs
