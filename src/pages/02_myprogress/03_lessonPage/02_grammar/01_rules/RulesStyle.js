import styled from "styled-components";
import { MainFrame, MainFrameWrapper, MainImage } from "../../../../../components/01_config/MainStyles";


const FrameWrapper = styled(MainFrameWrapper)`
    // background-color: lightgray;
    width: 100%;
`

const Frame = styled(MainFrame)`
    // height: 400px;
    // min-height: fit-content;
    width: 40%;
    // height: 800px;
    padding: 10px;
    @media(max-width: 800px) {
        width: 90%;
        height: fit-content;
    }
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