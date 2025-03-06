import styled from "styled-components";
import { colors } from "../../../components/01_config/Colors";
import { MainWrapper, MainHeader, MainHeading, MainHeadingCapital, MainBodyText } from "../../../components/01_config/MainStyles";

const Wrapper = styled(MainWrapper)`
    gap: 30px;
`

const Header = styled(MainHeader)`

`

const Heading = styled(MainHeading)`
    text-align: center;
`

const SubheadingCapital = styled(MainHeadingCapital)`
    color: ${colors.myprogress}
`

const VocabularyWrapper = styled.div`
    display: flex;
    padding: 0 20px;
`

const Word = styled.span`
    &:after {
        content: ",  ";
        white-space: pre;
    }
    &:last-of-type {
        &:after {
        content: ""
    }
    }
`

export { Wrapper, Header, Heading, SubheadingCapital, VocabularyWrapper, Word }