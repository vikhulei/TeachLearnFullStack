import styled from "styled-components"
import { MainText } from "../VocabularyStyle"

const MemorizingWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 0 7vw;
    display: flex;
    justify-content: center;
    gap: 5vw;
    @media(max-width: 900px) {
        flex-direction: column;
        gap: 0;
        // background-color: red;
    }
`

const CircleTextWrapper = styled.div`
    position: relative;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    &:nth-of-type(2) {
        top: 40px;
    }
    @media(max-width: 900px) {
        gap: 20px;
        justify-content: start;
        flex-direction: row;
        align-items: start;
        // background-color: green;
        padding: 30px 10px;
        // padding-left: 30px;
        &:nth-of-type(2) {
            top: 0px;
            // padding-right: 60px;
        }
    }
    z-index: 20;
`

const Circle = styled.div`
    min-width: 120px;
    min-height: 120px;
    border-radius: 200px;
    border: solid #B5B5B5 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: bold;
    background-color: #EBEBEB;
`

const Line = styled.div`
    position: absolute;
    width: 100%;
    height: 80px;
    border-bottom: solid #B5B5B5 3px;
    z-index: 10;
    @media(max-width: 900px) {
        width: 50px;
        height: 100%;
        border-bottom: none;
        border-right: solid #B5B5B5 3px;
        // background-color: red;
    }
    // display: none;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 900px) {
    align-items: start;
        gap: 15px;
    }
`

const CircleHeading = styled.div`
    margin: 20px 0;
    font-size: 1.6rem;
    font-weight: bold;
    // background-color: red;
    // display: none;
    @media(max-width: 900px) {
        margin: 0;
    }
`

const CircleText = styled(MainText)`
    padding: 0;
    @media(max-width: 900px) {
        text-align: left;
    }
`

export { MemorizingWrapper, CircleTextWrapper, Circle, Line, TextWrapper, CircleHeading, CircleText }