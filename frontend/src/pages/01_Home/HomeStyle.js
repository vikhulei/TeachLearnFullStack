import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";


const ContentWrapper = styled.div`
    position: relative;
    top: ${sizes.headerheight};
    margin: 0 ${sizes.marginsides};
    z-index:100;
    z-index:0;
`
   

export { ContentWrapper }