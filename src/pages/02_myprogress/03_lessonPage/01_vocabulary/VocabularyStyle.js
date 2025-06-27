import styled from "styled-components";
import { MainFrame, MainHeading, MainSectionWrapper } from "../../../../components/01_config/MainStyles";
import { colors } from "../../../../components/01_config/Colors";

const Wrapper = styled(MainSectionWrapper)`

`

const Heading = styled(MainHeading)`
    text-align: center;
`

const Frame = styled(MainFrame)`
justify-content: center;
// align-items: left;
@media (min-width: 800px) {
    width: 60%;
    // display: grid;
    // grid-template-colums: 1fr 1fr 1fr;
}
`

const Word = styled.div`
    position: relative;
    height: 30px;
    width: 100%;
    cursor: pointer;
    user-select: none;
    font-size: 1.3rem;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    @media (max-width: 800px) {
    &:nth-of-type(10n) {
        height: 55px;
        border-bottom: solid 1px black;
    }
    }
    @media (min-width: 800px) {
       width: fit-content;
    }
    // &:nth-of-type(12n+2) {
    //     font-size: 1.8rem;
    //     font-weight: bold;
    //     color: ${colors.myprogress};
    // }
    // &:nth-of-type(6n+5) {
    //     font-size: 1.8rem;
    //     font-style: italic;
    // }
`

const EngWord = styled.div`
    position: relative;
`

const UkrWord = styled.div`
    position: relative;
    // width: 2px;
    color: red;
    overflow: visible;
        &:nth-of-type(12n+2) {
        font-size: 1.3rem;
        font-weight: normal;
        color: red;
    }
    &:nth-of-type(6n+5) {
        font-size: 1.3rem;
        font-style: normal;
    }
`


export { Wrapper, Heading, Frame, Word, EngWord, UkrWord }