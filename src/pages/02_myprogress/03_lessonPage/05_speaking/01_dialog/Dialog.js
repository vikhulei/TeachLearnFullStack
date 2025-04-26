import { useEffect, useState } from "react"
import { FrameWrapper, Frame, FrameHeading, SentenceWrapper, DialogName, DialogLine, Correct, DialogWrapper } from "./DialogStyle"
import { DialogData } from "./DialogData"
import { useSelector } from "react-redux"

const Dialog = () => {

    const currentLesson = useSelector(state => state.lesson.currentLesson)

    const [dialogData, setDialogData] = useState(
        DialogData.filter(val => val.lesson === currentLesson)
    )

    const clickQuestion = (e) => {
        e.preventDefault();
        let currentId = Number(e.currentTarget.id) 
        setDialogData((prevDialogData) => prevDialogData.map(value =>
            ({ ...value, dialog: value.dialog.map((val, ind) => ind === currentId ? {...val, q_display: val.q_display === "block" ? "none" : "block"} : val) })
        ))
    }

    const clickAnswer = (e) => {
        e.preventDefault();
        let currentId = Number(e.currentTarget.id) 
        setDialogData((prevDialogData) => prevDialogData.map(value =>
            ({ ...value, dialog: value.dialog.map((val, ind) => ind === currentId ? {...val, a_display: val.a_display === "block" ? "none" : "block"} : val) })
        ))
    }

    useEffect(() => {
        setDialogData(DialogData.filter(val => val.lesson === currentLesson))
    }, [currentLesson])

    return (

            // <FrameWrapper>
                <Frame>
                    <FrameHeading>Dialog</FrameHeading>
                    {dialogData[0].dialog.map((value, index) => (
                        <DialogWrapper key={index}>

                        <SentenceWrapper>
                            <DialogName>
                                Person 1:  &nbsp;
                            </DialogName>
                            <DialogLine id={index} onClick={clickQuestion}>
                                {value.question} &nbsp;
                            </DialogLine>
                            <Correct style={{display: value.q_display}}>
                                {value.q_translate}
                            </Correct>
                        </SentenceWrapper>

                        <SentenceWrapper>
                            <DialogName>
                                Person 2:  &nbsp;
                            </DialogName>
                            <DialogLine id={index} onClick={clickAnswer}>
                                {value.answer} &nbsp;
                            </DialogLine>
                            <Correct style={{display: value.a_display}}>
                                {value.a_translate}
                            </Correct>
                        </SentenceWrapper>
                        </DialogWrapper>
                    ))}
                </Frame>

            // </FrameWrapper>
        

        
    )
}

export default Dialog