import styled from "styled-components";
import {  MainBodyText, MainHeading, MainHeadingCapital, } from "../../../components/01_config/MainStyles"

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
    width: 20vw;
    height: 40vw;
    // background-color: darkblue;
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
    box-sizing: border-box;
    width: 100%;
    height: 30%;
    margin-top: -20px;
    padding: 40px 20px 0 20px;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    text-align: right;
`

const SecondTextBox = styled(FirstTextBox)`
    background-color: darkgray;
`

const HeadingCapital = styled(MainHeadingCapital)`
    // margin: 30px 20px 0 0;
`


const BodyText = styled(MainBodyText)`

`

const LastBlock = styled.div`
    width: 600px;
    height: 700px;
    background-color: darkgreen;
`
const WhoWeAre = styled.div`

`

const Heading = styled(MainHeading)`

`


const FindOutMore = styled.div`

`


export { Wrapper, Block, LastBlock, ImageWrapper, Image, FirstTextBox, SecondTextBox, Heading, BodyText, WhoWeAre, HeadingCapital, FindOutMore }