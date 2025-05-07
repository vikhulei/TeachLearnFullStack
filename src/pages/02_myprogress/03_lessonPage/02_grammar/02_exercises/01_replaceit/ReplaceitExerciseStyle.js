import styled from "styled-components";
import { MainFrame, MainHeadingCapital, MainHeadingColor, MainSentenceWrapper, MainText } from "../../../../../../components/01_config/MainStyles";
import { colors } from "../../../../../../components/01_config/Colors";


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
`

const BoldWordWrapper = styled.div`
`

const BoldWord = styled(Text)`
    font-weight: bold;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
`

export { Frame, FrameHeading, Icon, SentenceWrapper, Text, BoldWordWrapper, BoldWord  }