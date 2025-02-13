import styled from "styled-components"
import { MainText } from "../VocabularyStyle"

const MemorizingWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 0 7vw;
    display: flex;
    justify-content: center;
    gap: 5vw;
    @media(max-width: 800px) {
        flex-direction: column;
        gap: 5vh;
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
    @media(max-width: 800px) {
        justify-content: start;
        align-items: center;
        // background-color: green;
        padding: 30px 0 30px 30px;
        // padding-left: 30px;
        &:nth-of-type(2) {
            top: 0px;
            padding-right: 60px;
        }
    }
    z-index: 20;
`

const Circle = styled.div`
    width: 120px;
    height: 120px;
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
    @media(max-width: 800px) {
        width: calc(50% - 7vw);
        height: 100%;
        border-bottom: none;
        border-right: solid #B5B5B5 3px;
        // background-color: red;
    }
    // display: none;
`

const CircleHeading = styled.div`
    margin: 20px 0;
    font-size: 1.6rem;
    font-weight: bold;
    display: none;
`

const CircleText = styled(MainText)`
    padding: 0;
    display: none;
`

export { MemorizingWrapper, CircleTextWrapper, Circle, Line, CircleHeading, CircleText }