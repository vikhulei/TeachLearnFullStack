import styled from "styled-components";
import { MainFrame, MainFrameWrapper, MainHeadingCapital, MainInput } from "../../../../../components/01_config/MainStyles";
import { colors } from "../../../../../components/01_config/Colors";

const FrameWrapper = styled(MainFrameWrapper)`
`

const Frame = styled(MainFrame)`
    margin: 0;
    width: 400px;
    max-width: 90vw;
    flex-direction: column;
    align-items: start;
    gap: 35px;
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
    margin: 10px auto 20px;
`

const SentenceWrapper = styled.div`
    display: flex;
    max-width: 400px;
    margin: 0 auto;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    line-height: 1;
    // background-color: green;
`

const Text = styled.div`
    font-size: 1.3rem;
    text-wrap: nowrap;
`

const BoldWord = styled(Text)`
    position: relative;
    display: flex;
    text-wrap: nowrap;
    font-weight: bold;
    cursor: pointer;
`

const EngWord = styled.div`
    position: relative;
`

const UkrWord = styled.div`
    position: relative;
`

const FillInWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const FillInSentence = styled.div`
    text-align: center;
    cursor: pointer;
`

const FillInInput = styled(MainInput)`
    margin: 0 auto;
    width: 250px;
`

const FixitInput = styled(MainInput)`
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    border-bottom: solid 1px black;
    text-align: center;
    font-size: 1.2rem;
    &::placeholder {
        color: red
    }
    &:after {
        content: "test";
    }
`

export { FrameWrapper, Frame, FrameHeading, Icon, SentenceWrapper, Text, BoldWord, EngWord, UkrWord, FillInSentence, FillInInput, FixitInput }