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
    gap: 20px;
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
`

const Text = styled.div`
    font-size: 1.4rem;
    text-wrap: nowrap;
    -webkit-tap-highlight-color: transparent;
`

const BoldWord = styled(Text)`
    position: relative;
    display: flex;
    text-wrap: nowrap;
    font-weight: bold;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
`

const EngWord = styled.div`
    position: relative;
    -webkit-tap-highlight-color: transparent;
`

const UkrWord = styled.div`
    position: relative;
    -webkit-tap-highlight-color: transparent;
`

// const FixitInput = styled(MainInput)`
//     height: 40px;
//     background-color: rgba(0, 0, 0, 0);
//     border: 0;
//     border-bottom: solid 1px black;
//     text-align: center;
//     font-size: 1.5rem;
//     &::placeholder {
//         color: red
//     }
//     &:after {
//         content: "test";
//     }
// `

const Correct = styled.div`
    flex-basis: 100%;
    color: red;
    font-size: 1rem;
    line-height: 1.2;
`

export { FrameWrapper, Frame, FrameHeading, Icon, SentenceWrapper, Text, BoldWord, EngWord, UkrWord, Correct }