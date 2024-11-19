import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";
import vocabulary from "../../assets/02_vocabulary/vocabulary.jpg"


const Wrapper = styled.div`
    position: relative;
    margin: ${sizes.headerheight} ${sizes.marginsides} 0;
    height: calc(100vh - ${sizes.headerheight});
    background-size: cover;
    background-image: url(${vocabulary});
    border-bottom: solid 2px white;
    display: flex;
    flex-direction: column;
`
    
const ColorLayer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.93;
    background-color: #976048;
`

const TopWrapper = styled.div`
    position: relative;
    z-index: 10;
`

const TopButton = styled.button`

`

const BottomWrapper = styled.div`
    position: relative;
    z-index: 10;
`

const LeftWrapper = styled.div`

`

const LeftButton = styled.button`

`

const CentralWrapper = styled.div`

`

const InputsWrapper = styled.div`

`

const Input = styled.input`

`

const WordsWrapper = styled.div`

`

const Word = styled.div`

`

const RightWrapper = styled.div`

`

const LargeButtonsWrapper = styled.div`

`

const LargeButton = styled.button`

`

const MarksWrapper = styled.div`

`

const StudentWrapper = styled.div`

`

const TutorWrapper = styled.div`

`

const MarksText = styled.div`

`

const MarksPercent = styled.div`

`


const ImageWrapper = styled.div`

`

const Image = styled.img`

`



   

export { Wrapper, ColorLayer,  TopWrapper, TopButton, BottomWrapper, LeftWrapper, LeftButton, CentralWrapper, InputsWrapper, Input, WordsWrapper, Word, RightWrapper, LargeButtonsWrapper, LargeButton, MarksWrapper, StudentWrapper, TutorWrapper, MarksText, MarksPercent, ImageWrapper, Image }