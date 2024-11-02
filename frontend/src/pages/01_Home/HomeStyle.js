import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";
import home from "../../assets/home/home.jpg"



const FirstWrapper = styled.div`
    position: fixed; 
    top: 115px;
    width: 100vw;
    height: 100vh;
`

const ImageWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 ${sizes.marginsides};
    height: 100%;
`
   
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ContentWrapper = styled.div`
    position: relative;
    top: 115px;
    margin: 0 ${sizes.marginsides};
`
    
const SvgWrapper = styled.div`
    position: relative;
    height: 700px;
    z-index: 10;
`

const NextBlock = styled.div`
    position: relative;
    height: 1000px;
    background-color: darkgreen;
`


export { FirstWrapper, Image, ContentWrapper, SvgWrapper, NextBlock, ImageWrapper }






// const ColorLayer = styled.div`
//     position: relative;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(7, 83, 91, 0.55);
//     overflow: hidden;
//     // opacity: 55%;
//     &:before {
//         content: "";
//         position: absolute;
//         width: 400px;
//         height: 400px;
//         background-color: rgba(7, 83, 91, 0.2);
//         top: 100px;
//         padding-top: 100px;
//         left: 50vw;
//         border-radius: 50%;
//         // box-shadow: 0px 300px 0px 300px rgba(7, 83, 91, 0.55);
//     }
// `
