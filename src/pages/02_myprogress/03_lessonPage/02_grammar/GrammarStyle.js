import styled from "styled-components";
import { MainBodyText, MainFrame, MainHeadingCapital } from "../../../../components/01_config/MainStyles";
import { colors } from "../../../../components/01_config/Colors";
import { sizes } from "../../../../components/01_config/Sizes";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${sizes.margins_desk}
`

const SubheadingCapital = styled(MainHeadingCapital)`
    color: ${colors.myprogress};
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
    padding: 20px;
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
    background-color: grey;
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
`

export { Wrapper, SubheadingCapital, FrameWrapper, Frame, FrameGrammar, FrameBoldWord, FrameFillIn, FrameModify, Image, SentenceWrapper, Text, BoldWord }