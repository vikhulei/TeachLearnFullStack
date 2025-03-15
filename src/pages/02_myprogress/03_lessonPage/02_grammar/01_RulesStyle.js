import styled from "styled-components";
import { MainFrame, MainFrameWrapper } from "../../../../components/01_config/MainStyles";

const Wrapper = styled.div`
`

const FrameWrapper = styled(MainFrameWrapper)`
`

const FrameGrammar = styled(MainFrame)`
    margin: 0;
    height: fit-content;
    width: 500px;
    max-width: 90vw;
`

const Image = styled.img`
    width: 100%;
`

export { Wrapper, FrameWrapper, FrameGrammar, Image }