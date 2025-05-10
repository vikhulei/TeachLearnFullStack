import styled from "styled-components";
import { MainCorrect, MainFrame, MainHeadingColor, MainInput, MainSentenceWrapper, MainText } from "../../../../../../components/01_config/MainStyles";

const FillInInput = styled(MainInput)`
    font-size: 1.1rem;
    text-align: center;
    height: 30px;
    margin: 0 auto;
    width: 300px;
    max-width: 95vw;
`

const Frame = styled(MainFrame)`
    flex-direction: column;
`

const FrameHeading = styled(MainHeadingColor)`
`

const Icon = styled.img`
    height: 40px;
    margin: 10px auto 20px;
`

const SentenceWrapper = styled(MainSentenceWrapper)`
    flex-direction: row;
    line-height: 1;
    justify-content: center;
`

const Text = styled(MainText)`
    font-size: 1.1rem;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
`

const Correct = styled(MainCorrect)`
    flex-basis: 100%;
    width: 100%;
    text-align: center;
`


export { FillInInput, Frame, FrameHeading, Icon, SentenceWrapper, Text, Correct }