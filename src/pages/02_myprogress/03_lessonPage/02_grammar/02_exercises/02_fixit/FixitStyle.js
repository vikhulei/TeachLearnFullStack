import styled from "styled-components";
import { MainInput } from "../../../../../../components/01_config/MainStyles";
import { SentenceWrapper } from "../ExercisesStyle";

const SentenceWrapperFixit = styled(SentenceWrapper)`
    flex-direction: column;
    align-items: center;
`

const FixitInput = styled(MainInput)`
    background-color: rgba(0, 0, 0, 0);
    height: 18px;
    border: 0;
    border-bottom: solid 1px black;
    text-align: center;
    font-size: 1rem;
    font-style: italic;
    outline: none;
    &::placeholder {
        color: red
    }
    flex-basis: 100%;
    margin: 0 100px;
`

const Correct = styled.div`
    flex-basis: 100%;
    color: red;
    font-size: 0.8rem;
    line-height: 0.8;
`


export { SentenceWrapperFixit, FixitInput, Correct }