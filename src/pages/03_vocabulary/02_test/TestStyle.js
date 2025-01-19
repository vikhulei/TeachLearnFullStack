import styled from "styled-components"
import { colors } from "../../../components/01_config/Colors"
import { GenericButton, Word, WordSpan } from "../VocabularyStyle"


const TestButtonsWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    display: flex;
    gap: 35px;
    z-index: 30;
`

const TestButton = styled.button`
    width: 150px;
    height: 45px;
    border: 2px solid black;
    box-shadow: 0px 0px 5px black;
    cursor: pointer;
    &:active {
        transform: translate(2px, 1px);
    }
`

const CheckWordWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 70px 70px 30px;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 3px black solid;
    z-index: 30;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 2rem;
    z-index: 99;
`

const BarTestWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 35px;
    background-color: ${colors.mainDark};
    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 2.5;
    color: white;
`

const ClosedButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 34px;
    height: 34px;
    padding: 0;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    z-index: 100;
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 0.9;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const WordCheck = styled(Word)`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    text-align: left;
    height: 20px;
`

const CheckButton = styled(GenericButton)`
    width: 24px;
    height: 24px;
    margin-right: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const WordSpanCheck = styled(WordSpan)`
    font-size: 1.3rem;
    cursor: default;
    flex: 1;
    &:hover {
        font-weight: 600;
    }
`

const CreateButton = styled(TestButton)`
    height: 35px;
    margin: 20px auto 0px;
    padding: 0 30px;
    width: fit-content;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: ${colors.mainDark};
`
const TestWordWrapper = styled(CheckWordWrapper)`
    width: 300px;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
    padding-left: 30px;
    padding-right: 30px;
`

const TestedWord = styled.div`
    left: 0;
    margin: 0;
    width: 100%;
    cursor: pointer;
    text-align: center;
    font-size: 2rem;
    user-select: none;
`

export { TestButtonsWrapper, TestButton, CheckWordWrapper, BarTestWrapper, ClosedButton, WordCheck, CheckButton, WordSpanCheck, CreateButton, TestWordWrapper, TestedWord }