import styled from "styled-components";
import { MainInput } from "../../../../../../components/01_config/MainStyles";

const FillInSentence = styled.div`
    font-size: 1.4rem;
    text-align: center;
    cursor: pointer;
`

const FillInInput = styled(MainInput)`
    font-size: 1.3rem;
    text-align: center;
    height: 30px;
    margin: 0 auto;
    width: 300px;
    max-width: 95vw;
`

export { FillInSentence, FillInInput }