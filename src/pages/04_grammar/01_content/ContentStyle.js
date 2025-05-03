import styled from "styled-components"
import { MainFrame, MainHeadingCapital, MainText } from "../../../components/01_config/MainStyles"
import { colors } from "../../../components/01_config/Colors"

const FrameContent = styled(MainFrame)`
    width: 600px;
    flex-direction: column;
    margin: 0 auto;
    align-items: start;
`

const FrameHeading = styled(MainHeadingCapital)`
    margin: 0 auto;
    color: ${colors.myprogress};
    color: #044AEF;
    font-weight: bold;
    font-size: 1.4rem;
`

const Text = styled(MainText)`
    white-space: pre-wrap;
`

export { FrameContent, FrameHeading, Text }