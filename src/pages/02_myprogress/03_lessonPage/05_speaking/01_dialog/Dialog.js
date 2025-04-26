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
            ({ ...value, dialog: value.dialog.map((val, ind) => ind === currentId ? {...val, q_visibility: val.q_visibility === "visible" ? "hidden" : "visible"} : val) })
        ))
    }

    const clickAnswer = (e) => {
        e.preventDefault();
        let currentId = Number(e.currentTarget.id) 
        setDialogData((prevDialogData) => prevDialogData.map(value =>
            ({ ...value, dialog: value.dialog.map((val, ind) => ind === currentId ? {...val, a_visibility: val.a_visibility === "visible" ? "hidden" : "visible"} : val) })
        ))
    }

    useEffect(() => {
        setDialogData(DialogData.filter(val => val.lesson === currentLesson))
    }, [currentLesson])

    return (

            <FrameWrapper>
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
                            <Correct style={{visibility: value.q_visibility}}>
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
                            <Correct style={{visibility: value.a_visibility}}>
                                {value.a_translate}
                            </Correct>
                        </SentenceWrapper>
                        </DialogWrapper>
                    ))}
                </Frame>

            </FrameWrapper>
        

        
    )
}

export default Dialog