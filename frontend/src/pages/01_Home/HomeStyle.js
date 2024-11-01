import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";
import home from "../../assets/home/home.jpg"

const FirstWrapper = styled.div`
    position: relative; 
    width: 95vw;
    height: 600px;
    margin: auto;
    // margin: 0 ${sizes.marginsides};
    // background-color: rgba(7, 83, 91, 0.55);
    // opacity: 55%;
//     background-image: url(${home});
//     background-size: cover;
// `

const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    `
const ColorLayer = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 85%;
`

const SvgWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
`


export { FirstWrapper, Image, ColorLayer, SvgWrapper }






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
