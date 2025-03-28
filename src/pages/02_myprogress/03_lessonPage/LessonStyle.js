import styled from "styled-components";
import { MainWrapper, MainHeader, SectionWrapper, MainHeading, MainFrameWrapper, MainFrame } from "../../../components/01_config/MainStyles";

const Wrapper = styled(MainWrapper)`
`

const Header = styled(MainHeader)`

`

const WrapperSection = styled(SectionWrapper)`
`

const HeadingSection = styled(MainHeading)`
    text-align: center;
`

const FrameWrapper = styled(MainFrameWrapper)`
    background-color: green;
    height: 800px;
`

const Frame = styled(MainFrame)`
    margin: 0;
    width: 400px;
    height: fit-content;
    max-width: 90vw;
    flex-direction: column;
    align-items: start;
    gap: 20px;
`

const Text = styled.div`
    font-size: 1.4rem;
    text-wrap: nowrap;
    -webkit-tap-highlight-color: transparent;
`

export { Wrapper, Header, WrapperSection, HeadingSection, FrameWrapper, Frame, Text  }