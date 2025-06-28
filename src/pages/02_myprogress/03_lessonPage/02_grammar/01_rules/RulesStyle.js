import styled from "styled-components";
import { MainFrame, MainFrameWrapper, MainImage } from "../../../../../components/01_config/MainStyles";


const FrameWrapper = styled(MainFrameWrapper)`
`

const Frame = styled(MainFrame)`
    height: fit-content;
    width: 600px;
`

const Image = styled(MainImage)`
`

const FrameLarge = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 400px;
    background-color: darkgreen;
`

export { FrameWrapper, Frame, Image, FrameLarge }