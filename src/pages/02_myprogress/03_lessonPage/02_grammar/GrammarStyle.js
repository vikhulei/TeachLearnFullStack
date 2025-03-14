import styled from "styled-components";
import { MainBodyText, MainFrame, MainFrameWrapper, MainHeading, MainHeadingCapital, MainWrapper, SectionWrapper } from "../../../../components/01_config/MainStyles";
import { colors } from "../../../../components/01_config/Colors";
import { sizes } from "../../../../components/01_config/Sizes";

const Wrapper = styled(SectionWrapper)`
`

const Heading = styled(MainHeading)`
    text-align: center;
`

const FrameWrapper = styled(MainFrameWrapper)`
`

const Frame = styled(MainFrame)`
    max-width: 80%;
    flex-direction: row;
    align-items: end;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
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

export { Wrapper, Heading, FrameWrapper, Frame, FrameGrammar, FrameBoldWord, FrameFillIn, FrameModify, Image, SentenceWrapper, Text, BoldWord }