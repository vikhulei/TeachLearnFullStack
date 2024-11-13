import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    padding: 100px 5vw;
    background-color: #F5F5F5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
`

const Block = styled.div`
    width: 300px;
    height: 700px;
    background-color: darkblue;
`
const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 70%;
    left: -20px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const FirstTextBox = styled.div`

`
const SecondTextBox = styled.div`

`
const Header = styled.div`

`
const BodyText = styled.div`

`
const LastBlock = styled.div`
    width: 600px;
    height: 700px;
    background-color: darkgreen;
`
const WhoWeAre = styled.div`

`
const FindOutMore = styled.div`

`


export { Wrapper, Block, LastBlock, ImageWrapper, Image, FirstTextBox, SecondTextBox, Header, BodyText, WhoWeAre, FindOutMore }