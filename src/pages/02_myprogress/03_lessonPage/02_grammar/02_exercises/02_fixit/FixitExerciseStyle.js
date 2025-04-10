import styled from "styled-components";
import { MainCorrect, MainFrame, MainHeadingColor, MainInput, MainSentenceWrapper, MainText } from "../../../../../../components/01_config/MainStyles";


const FixitInput = styled(MainInput)`
    background-color: rgba(0, 0, 0, 0);
    height: 25px;
    max-width: 200px;
    border: 0;
    border-bottom: solid 1px black;
    text-align: center;
    font-size: 1.3rem;
    font-style: italic;
    outline: none;
    flex-basis: 100%;
    margin: 0 50px;
`


const Frame = styled(MainFrame)`
    flex-direction: column;
    gap: 40px;
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
`

const BoldWordWrapper = styled.div`
`

const BoldWord = styled(Text)`
    font-weight: bold;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
`

const Correct = styled(MainCorrect)`
    flex-basis: 100%;
    width: 100%;
    text-align: center;
`


export {  Frame, FrameHeading, Icon, SentenceWrapper, Text, BoldWordWrapper, BoldWord, FixitInput, Correct }