import styled from "styled-components";
import { MainCorrect, MainFrame, MainFrameWrapper } from "../../../../../components/01_config/MainStyles";

const FrameWrapper = styled(MainFrameWrapper)`
`

const Frame = styled(MainFrame)`
`

const Sign = styled.img`
    height: 300px;
    object-fit: cover;
    margin: 15px;
`

const Correct = styled(MainCorrect)`
`

export { FrameWrapper, Frame, Sign, Correct }