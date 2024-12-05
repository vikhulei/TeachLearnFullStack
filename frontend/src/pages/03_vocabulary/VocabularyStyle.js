import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";
import vocabulary from "../../assets/02_vocabulary/vocabulary.jpg"


const Wrapper = styled.div`
    position: relative;
    margin: ${sizes.headerheight} ${sizes.marginsides} 0;
    padding: 3vw 10vw;;
    background-size: cover;
    background-image: url(${vocabulary});
    background-color: #E9ECED;
    border-bottom: solid 2px white;
    display: flex;
    flex-direction: column;
`

const ColorLayer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(7, 83, 91);
    background-color: #F5F5F5;
    background-color: #828181;
    opacity: 0.85;
    // display: none;
`

const TopWrapper = styled.div`
    position: relative;
    height: 120px;
    width: 80%;
    margin: 0 auto 10px;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    // background-color: rgba(7, 83, 91);
`

const TopButton = styled.button`
    width: 90px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0);
    background-color: rgba(255, 255, 255, 0.53);
    font-family: Raleway;
    font-size: 1.1rem;
    font-weight: 500;
    // color: #FB6A5D;
    color: #D76F66;
    color: #E7BEBE;
    color: #343434;
    border: solid lightgray 1px;
    // border-radius: 5px;
    cursor: pointer;
    &:hover {
        font-weight: 700;
    }
    &:active {
        transform: translate(1px, 1px);
    }
    &:nth-of-type(4) {
        color: #AB2121;
    }
    &:nth-of-type(6) {
        color: #AB2121;
    }
    &:nth-of-type(9) {
        color: #AB2121;
    }
`

const BottomWrapper = styled.div`
    position: relative;
    height: 400px;
    z-index: 10;
    display: flex;
    justify-content: center;
    gap: 4vw;
`

const LeftWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const LeftButton = styled(TopButton)`
    width: 150px;
`

const CentralWrapper = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 430px;
    padding: 20px 0 20px 40px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // border: 3px solid #413D3B;
    background-color: #5B5856;
    background-color: rgba(255, 255, 255, 0.53);
    box-shadow: 0px 0px 3px #D6C9C9;
`

const InputsWrapper = styled.div`

`

const Input = styled.input`
    width: 120px;
    height: 20px;
    margin-right: 25px;
    background-color: #F3F3F3;
    border: none;
`

const WordsWrapper = styled.div`
    
`

const Word = styled.div`
    user-select: none;
    color: #D6C9C9;
    color: #343434;
    font-weight: 600;
    font-size: 1.2rem;
`

const WordSpan = styled.span`
    cursor: pointer;
    margin-right: 5px;
`

const TranslatSpan = styled.span`
    color: black;
    font-weight: 700;
`

const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const LargeButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const LargeButton = styled(TopButton)`
    width: 200px;
    height: 40px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #D6C9C9;
    color: white;
    background-color: #07535B;
    border-radius: 0;
    &:hover {
        font-weight: 600;
    }
`

const MarksWrapper = styled.div`
    color: #D6C9C9;
    color: black;
    width: 200px;
    font-size: 1.1rem;
    font-weight: bold;
    text-shadow: white 0 0 6px;
`

const StudentWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`

const TutorWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const MarksText = styled.div`

`

const MarksPercent = styled.div`
    font-weight: 800;
`


const ImageWrapper = styled.div`

`

const Image = styled.img`

`





export { Wrapper, ColorLayer, TopWrapper, TopButton, BottomWrapper, LeftWrapper, LeftButton, CentralWrapper, InputsWrapper, Input, WordsWrapper, Word, WordSpan, TranslatSpan, RightWrapper, LargeButtonsWrapper, LargeButton, MarksWrapper, StudentWrapper, TutorWrapper, MarksText, MarksPercent, ImageWrapper, Image }