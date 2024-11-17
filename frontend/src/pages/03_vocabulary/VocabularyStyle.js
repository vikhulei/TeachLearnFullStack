import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";


const Wrapper = styled.div`
    position: relative;
    margin: ${sizes.headerheight} ${sizes.marginsides} 0;
    height: calc(100vh - ${sizes.headerheight});
    background-color: #976048;
`
   

export { Wrapper }