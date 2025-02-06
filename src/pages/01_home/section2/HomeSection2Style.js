import styled from "styled-components";
import {  MainBodyText, MainHeading, MainHeadingCapital, } from "../../../components/01_config/MainStyles"
import { sizes } from "../../../components/01_config/Sizes";

const Wrapper = styled.div`
    position: relative;
    // height: fit-content;
    padding: ${sizes.marginsections} 5vw;
    background-color: #F5F5F5;
    background-color: red;
    display: flex;
    justify-content: space-between;
    gap: 5vw;
    z-index: 10;
    @media(max-width: 800px) {
        flex-direction: column;
        // padding: 0;
    }

`

const FirstBlock = styled.div`
    // width: 20vw;
    flex: 1;
    height: 40vw;
    margin-top: 30px;
`

const SecondBlock = styled(FirstBlock)`
    margin-top: -30px;
`

const ThirdBlock = styled.div`
    // width: 35vw;
    flex: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30px;
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
    // height: 200px;
    margin-top: -20px;
    padding: 40px 20px 20px 20px;
    background-color: #EBEBEB;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    text-align: right;
`

const SecondTextBox = styled(FirstTextBox)`
    background-color: #D1D1D1;
`

const HeadingCapital = styled(MainHeadingCapital)`
    
`


const BodyText = styled(MainBodyText)`
    line-height: 2;
`

const WhoWeAre = styled(HeadingCapital)`
    color: grey;
    margin-bottom: 15px;
`

const Heading = styled(MainHeading)`
    margin-bottom: 10px;
`
const BodyTextLastBlock = styled(BodyText)`
    line-height: 1.8;
    font-size: 1.3rem;
     margin-bottom: 10px;   
`

const FindOutMore = styled(Heading)`
    margin-top: 15px;
    color: #07535B;
    font-size: 1.5rem;
    font-weight: 900;
    cursor: pointer;
`


export { Wrapper, FirstBlock, SecondBlock, ThirdBlock, ImageWrapper, Image, FirstTextBox, SecondTextBox, Heading, BodyText, WhoWeAre, HeadingCapital, BodyTextLastBlock, FindOutMore }