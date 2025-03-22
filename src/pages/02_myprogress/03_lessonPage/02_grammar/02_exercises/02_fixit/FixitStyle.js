import styled from "styled-components";
import { MainFrame, MainInput } from "../../../../../../components/01_config/MainStyles";
import { Frame, SentenceWrapper } from "../ExercisesStyle";

const FrameFixit = styled(MainFrame)`
    margin: 0;
    width: 400px;
    max-width: 90vw;
    flex-direction: column;
    align-items: start;
    gap: 40px;
`

const SentenceWrapperFixit = styled(SentenceWrapper)`
    flex-direction: column;
    align-items: center;
`

const FixitInput = styled(MainInput)`
    background-color: rgba(0, 0, 0, 0);
    height: 25px;
    max-width: 200px;
    border: 0;
    border-bottom: solid 1px black;
    text-align: center;
    font-size: 1.3rem;
    font-style: italic;
    outline: none;
    &::placeholder {
        color: red
    }
    flex-basis: 100%;
    margin: 0 50px;
`




export { FrameFixit, SentenceWrapperFixit, FixitInput }