import styled from "styled-components";
import { MainInput } from "../../../../../../components/01_config/MainStyles";

const FixitInput = styled(MainInput)`
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    border-bottom: solid 1px black;
    text-align: center;
    font-size: 1.2rem;
    &::placeholder {
        color: red
    }
    &:after {
        content: "test";
    }
`

export { FixitInput }