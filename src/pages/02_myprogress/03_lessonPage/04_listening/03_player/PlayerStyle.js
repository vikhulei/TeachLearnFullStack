import styled from "styled-components";
import { MainButton } from "../../../../../components/01_config/MainStyles";

const Wrapper = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    justify-content: space-between;
    // background-color: red;
`

const Button = styled(MainButton)`
    width: 25%;
    height: 20px;
    flex: 1;
`

export { Wrapper, Button }