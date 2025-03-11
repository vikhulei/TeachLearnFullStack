import styled from "styled-components";
import { MainBodyText, MainFrame, MainHeadingCapital, MainWrapper } from "../../../../components/01_config/MainStyles";
import { colors } from "../../../../components/01_config/Colors";
import { sizes } from "../../../../components/01_config/Sizes";

const Wrapper = styled(MainWrapper)`
    display: flex;
    flex-direction: column;
    gap: ${sizes.margins_desk};
    background-color: lightgrey;
    margin: 0;
`

const SubheadingCapital = styled(MainHeadingCapital)`
    padding-top: 30px;
    color: ${colors.myprogress};
    text-align: center;
    font-size: 2rem;
`

const FrameWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
`

const Frame = styled(MainFrame)`
    height: fit-content;
    margin: 0 auto;
    padding: 30px;
    // width: 80%;
    max-width: 80%;
    flex-direction: row;
    align-items: end;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    // background-color: red;
`

const FrameGrammar = styled(Frame)`
    margin: 0;
`

const FrameBoldWord = styled(FrameGrammar)`
    padding-right: 120px;
    background-color: #403E3E;
    flex-direction: column;
    align-items: start;
    color: white;
`

const FrameFillIn = styled(FrameGrammar)`
    background-color: lightgrey;
`

const FrameModify = styled(FrameGrammar)`
    background-color: darkgrey;
`

const Image = styled.img`
    width: 400px;
`

const SentenceWrapper = styled.div`
`

const Text = styled.span`

`

const BoldWord = styled(Text)`
    font-weight: bold;
    cursor: pointer;
`

export { Wrapper, SubheadingCapital, FrameWrapper, Frame, FrameGrammar, FrameBoldWord, FrameFillIn, FrameModify, Image, SentenceWrapper, Text, BoldWord }