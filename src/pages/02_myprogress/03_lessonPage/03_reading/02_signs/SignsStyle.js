import styled from "styled-components";
import { MainCorrect, MainFrame, MainFrameWrapper } from "../../../../../components/01_config/MainStyles";

const FrameWrapper = styled(MainFrameWrapper)`
    gap: 50px;
    margin: 0 150px;
`

const Frame = styled(MainFrame)`
    padding: 0;
    display: flex;
    flex-direction: column;
    height: fit-content;
    text-align: center;
`

const SignImage = styled.img`
    width: 250px;
    object-fit: cover;
    margin: 0;
`

const Correct = styled(MainCorrect)`
`

export { FrameWrapper, Frame, SignImage, Correct }