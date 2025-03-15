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

const FrameBoldWord = styled(MainFrame)`
    width: 400px;
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

// const FrameFillIn = styled(FrameGrammar)`
//     background-color: lightgrey;
// `

// const FrameModify = styled(FrameGrammar)`
//     background-color: darkgrey;
// `


const Icon = styled.img`
    width: 40px;
    margin: 10px auto;
`

const SentenceWrapper = styled.div`
    margin: 0 auto;
`

const Text = styled.span`
    font-size: 1.3rem;
`

const BoldWord = styled(Text)`
    font-weight: bold;
    cursor: pointer;
`

export { Wrapper, Heading, FrameWrapper, FrameBoldWord, FrameHeading, Icon, SentenceWrapper, Text, BoldWord }