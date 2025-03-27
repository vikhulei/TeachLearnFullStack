import styled from "styled-components";
import { Frame } from "../LessonStyle";

const LeftFrameWrapper = styled(Frame)`
    height: 100%;
`

const RightFrameWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Image = styled.img`
    height: 200px;
`

export { LeftFrameWrapper, RightFrameWrapper, Image }