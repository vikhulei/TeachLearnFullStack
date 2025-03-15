import styled from "styled-components";
import { MainFrame, MainFrameWrapper, MainHeadingCapital, MainInput } from "../../../../components/01_config/MainStyles";
import { colors } from "../../../../components/01_config/Colors";

const FrameWrapper = styled(MainFrameWrapper)`
`

const Frame = styled(MainFrame)`
    margin: 0;
    width: 400px;
    max-width: 90vw;
    flex-direction: column;
    align-items: start;
    gap: 15px;
`

const FrameHeading = styled(MainHeadingCapital)`
    margin: 0 auto;
    color: ${colors.myprogress};
    color: #044AEF;
    font-weight: bold;
    font-size: 1.4rem;
`

const Icon = styled.img`
    height: 40px;
    margin: 10px auto;
`

const SentenceWrapper = styled.div`
    margin: 0 auto;
    text-align: center;
`

const Text = styled.span`
    font-size: 1.3rem;
`

const BoldWord = styled(Text)`
    font-weight: bold;
    cursor: pointer;
`

const FillInWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const FillInSentence = styled.div`
    text-align: center;
`

const FillInInput = styled(MainInput)`
    margin: 0 auto;
    width: 250px;
`

export { FrameWrapper, Frame, FrameHeading, Icon, SentenceWrapper, Text, BoldWord, FillInSentence, FillInInput }