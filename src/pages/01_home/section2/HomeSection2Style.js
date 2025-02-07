import styled from "styled-components";
import {  MainBodyText, MainHeading, MainHeadingCapital, } from "../../../components/01_config/MainStyles"
import { sizes } from "../../../components/01_config/Sizes";

const Wrapper = styled.div`
    position: relative;
    padding: ${sizes.marginsections} 5vw;
    background-color: #F5F5F5;
    display: flex;
    justify-content: space-between;
    gap: 5vw;
    z-index: 10;
    @media(max-width: 800px) {
        flex-direction: column-reverse;
        padding: ${sizes.marginmobile} 15vw;
        // padding: 0 15vw;
        gap: 50px;
    }

`

const FirstBlock = styled.div`
    flex: 1;
    height: 40vw;
    margin-top: 30px;
    @media(max-width: 800px) {
           margin-top: 0px; 
    }
`

const SecondBlock = styled(FirstBlock)`
    margin-top: -30px;
    @media(max-width: 800px) {
           margin-top: 0px; 
    }
`

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 70%;
    left: -10px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const FirstTextBox = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin-top: -20px;
    padding: 40px 20px 20px 20px;
    right: -10px;
    background-color: #EBEBEB;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    text-align: right;
    z-index: -10;
`

const SecondTextBox = styled(FirstTextBox)`
    background-color: #D1D1D1;
`

const ThirdBlock = styled.div`
    flex: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    margin-top: 30px;
    @media(max-width: 800px) {
        margin-top: 0px;
        
    }
`

const HeadingCapital = styled(MainHeadingCapital)`
    
`


const BodyText = styled(MainBodyText)`
    line-height: 2;
`

const WhoWeAre = styled(HeadingCapital)`
    color: grey;
    margin-bottom: 15px;
    @media(max-width: 800px) {
        font-size: calc(12px + 1.5vw);
    }
`

const Heading = styled(MainHeading)`
    // margin-bottom: 10px;
`
const BodyTextLastBlock = styled(BodyText)`
    line-height: 1.8;
    font-size: 1.3rem;
    // margin-bottom: 10px;   
`

const FindOutMore = styled(Heading)`
    margin-top: 15px;
    color: #07535B;
    font-size: 1.5rem;
    font-weight: 900;
    cursor: pointer;
    margin
`


export { Wrapper, FirstBlock, SecondBlock, ThirdBlock, ImageWrapper, Image, FirstTextBox, SecondTextBox, Heading, BodyText, WhoWeAre, HeadingCapital, BodyTextLastBlock, FindOutMore }