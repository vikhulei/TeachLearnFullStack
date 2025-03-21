import styled from "styled-components";
import { MainInput } from "../../../../../../components/01_config/MainStyles";

const FillInSentence = styled.div`
    text-align: center;
    cursor: pointer;
`

const FillInInput = styled(MainInput)`
    margin: 0 auto;
    width: 250px;
`

export { FillInSentence, FillInInput }