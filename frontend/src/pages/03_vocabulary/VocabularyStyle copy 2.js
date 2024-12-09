import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";
import vocabulary from "../../assets/02_vocabulary/vocabulary.jpg"


const Wrapper = styled.div`
    position: relative;
    margin: ${sizes.headerheight} ${sizes.marginsides} 0;
    padding: 100px 6vw;
    background-size: cover;
    background-image: url(${vocabulary});
    // background-color: #E9ECED;
    // background-color: #3FB4C9;
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
    background-color: #F5F5F5;
    background-color: rgba(7, 83, 91);
    background-color: #828181;
    background-color: #3FB4C9;
    opacity: 0.4;
    opacity: 0.92;
    // display: none;
`

const TopWrapper = styled.div`
    position: relative;
    height: 120px;
    width: 100%;
    margin: 0 auto 10px;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // gap: 20px;
    // background-color: rgba(7, 83, 91);
`

const TopButton = styled.button`
    width: 100px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0);
    background-color: rgba(223, 223, 223, 0.93);
    background-color: #D3D3D3;
    font-family: Raleway;
    font-size: 1.1rem;
    font-weight: 600;
    // color: #FB6A5D;
    color: #D76F66;
    color: #E7BEBE;
    color: #343434;
    color: black;
    // border: solid lightgray 2px;
    // box-shadow: gray 1px 2px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        font-weight: 750;
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
    justify-content: space-between;
    // gap: 4vw;
`

const LeftWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const LeftButton = styled(TopButton)`
    width: 150px;
    background-color: #858585;
    // color: white;
    // color: black;
    &:nth-of-type(4) {
        color: #AB2121;
    }
    &:nth-of-type(6) {
        color: #AB2121;
    }
    &:nth-of-type(9) {
        color: #AB2121;
    }
    // height: 39px;
`

const CentralWrapper = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 530px;
    padding: 20px 0 20px 40px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // border: 2px solid #929292;
    background-color: rgba(223, 223, 223, 0.93);
    background-color: #5B5856;
    background-color: #D3D3D3;
    background-color: #07535B;
    box-shadow: 0px 0px 10px #D6C9C9;
`

const InputsWrapper = styled.div`

`

const Input = styled.input`
    width: 150px;
    height: 24px;
    margin-right: 35px;
    background-color: #929292;
    background-color: #F3F3F3;
    border: none;
`

const WordsWrapper = styled.div`
    
`

const Word = styled.div`
    user-select: none;
    // color: #D6C9C9;
    // color: #343434;
    font-weight: 600;
    font-size: 1.2rem;
`

const WordSpan = styled.span`
    margin-right: 5px;
    cursor: pointer;
    &:hover {
        font-weight: 750;
    }
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
    // font-size: 0.95rem;
    font-weight: 600;
    color: #D6C9C9;
    color: white;
    background-color: #07535B;
    background-color: #858585;
    border-radius: 6px;
    &:hover {
        font-weight: 600;
    }
`

const MarksWrapper = styled.div`
    color: white;
    color: #D6C9C9;
    color: black;
    width: 200px;
    font-size: 1.2rem;
    font-weight: bold;
    // text-shadow: black 2px 2px 10px,
    //              black -2px 2px 10px,
    //              black 2px -2px 10px;
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
    right: ${sizes.marginsides};
    width: 200px;

`

const Image = styled.img`
    width: 100%;
`





export { Wrapper, ColorLayer, TopWrapper, TopButton, BottomWrapper, LeftWrapper, LeftButton, CentralWrapper, InputsWrapper, Input, WordsWrapper, Word, WordSpan, TranslatSpan, RightWrapper, LargeButtonsWrapper, LargeButton, MarksWrapper, StudentWrapper, TutorWrapper, MarksText, MarksPercent, ImageWrapper, Image }