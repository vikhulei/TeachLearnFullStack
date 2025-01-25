import styled, { css } from "styled-components";
import { sizes } from "../../components/01_config/Sizes";
import { colors } from "../../components/01_config/Colors"

const Wrapper = styled.div`
    position: relative;
    margin: ${sizes.headerheight} ${sizes.marginsides} 0;
    background-color: #EBEBEB;
    border-bottom: solid 2px white;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding-bottom: 50px;
    &:nth-of-type(4) {
        margin-top: 200px;
    }
`

const GenericButton = styled.button`
    width: 150px;
    height: 35px;
    background-color: transparent;
    border: 2px solid ${colors.greyFrame};
    color: black;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        font-size: 0.76rem;
        border-width: 3px;
    }
    &:active {
        transform: translate(1px, 1px);
    }
`

const Header = styled.div`
    position: relative;
    padding: 50px;
    background-color: ${colors.mainDark};
    color: white;
`

const HeaderText = styled.div`
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
`

const Title = styled.div`
    position: relative;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    z-index: 20;
`

const MainText = styled.div`
    position: relative;
    padding: 0 10vw;
    font-size: 1.1rem;
    line-height: 1.7;
    z-index: 20;
`

const Word = styled.div`
    user-select: none;
    font-weight: 600;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
`

const WordSpan = styled.span`
    margin-right: 5px;
    cursor: pointer;
    &:hover {
        font-weight: 750;
    }
`

const LargeCircle = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 300px;
    top: 300px;
    right: 10vw;
    background-color: rgba(217, 217, 217, 0.6);
    z-index: 10;
`

const MediumCircle = styled(LargeCircle)`
    width: 200px;
    height: 200px;
    top: 800px;
    left: 47vw;
`

const SmallCircle = styled(LargeCircle)`
    width: 50px;
    height: 50px;
    top: 600px;
    left: 42vw;
`

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`


export { Wrapper, Header, HeaderText, Title, MainText, LargeCircle, MediumCircle, SmallCircle, ImageWrapper, Image, GenericButton, Word, WordSpan }
