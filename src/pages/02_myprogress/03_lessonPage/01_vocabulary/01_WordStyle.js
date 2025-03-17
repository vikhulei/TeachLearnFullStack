import styled from "styled-components";
import { colors } from "../../../../components/01_config/Colors";

const WordCard = styled.div`

`

const EngWord = styled.span`
    font-size: 1.3rem;
    &:nth-of-type(14n+2) {
        font-size: 2.8rem;
        font-weight: bold;
        color: ${colors.myprogress};
    }
    &:nth-of-type(8n+5) {
        font-size: 1.8rem;
        font-style: italic;
    }
    }
`


const UkrWord = styled.div`
    position: absolute;
`

export { WordCard, EngWord, UkrWord }