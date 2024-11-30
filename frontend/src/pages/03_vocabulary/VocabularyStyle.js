import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";
import vocabulary from "../../assets/02_vocabulary/vocabulary.jpg"


const Wrapper = styled.div`
    position: relative;
    margin: ${sizes.headerheight} ${sizes.marginsides} 0;
    // height: calc(100vh - ${sizes.headerheight});
    padding: 3vw 10vw;;
    background-size: cover;
    background-image: url(${vocabulary});
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
    opacity: 0.93;
    background-color: #976048;
`

const TopWrapper = styled.div`
    position: relative;
    margin-bottom: 3vw;
    z-index: 10;
    display: flex;
    justify-content: center;
    gap: 20px;
`

const TopButton = styled.button`
    width: 85px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #604231;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`

const BottomWrapper = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    gap: 50px;
`

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const LeftButton = styled(TopButton)`
    width: 150px;
`

const CentralWrapper = styled.div`

`

const InputsWrapper = styled.div`

`

const Input = styled.input`

`

const WordsWrapper = styled.div`
    color: white;
`

const Word = styled.div`

`

const WordSpan = styled.span`
    cursor: pointer;
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
    gap: 10px;
`

const LargeButton = styled(TopButton)`
    width: 200px;
    height: 50px;
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



   

export { Wrapper, ColorLayer,  TopWrapper, TopButton, BottomWrapper, LeftWrapper, LeftButton, CentralWrapper, InputsWrapper, Input, WordsWrapper, Word, WordSpan, TranslatSpan, RightWrapper, LargeButtonsWrapper, LargeButton, MarksWrapper, StudentWrapper, TutorWrapper, MarksText, MarksPercent, ImageWrapper, Image }