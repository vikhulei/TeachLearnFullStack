import styled from "styled-components"
import { MainText } from "../VocabularyStyle"

const MemorizingWrapper = styled.div`
    position: relative;
    padding: 0 7vw;
    display: flex;
    justify-content: center;
    gap: 5vw;
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
`

const CircleHeading = styled.div`
    margin: 20px 0;
    font-size: 1.6rem;
    font-weight: bold;
`

const CircleText = styled(MainText)`
    padding: 0;
`

export { MemorizingWrapper, CircleTextWrapper, Circle, Line, CircleHeading, CircleText }