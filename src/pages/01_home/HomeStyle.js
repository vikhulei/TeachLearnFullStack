import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";


const ContentWrapper = styled.div`
    position: relative;
    margin: ${sizes.headerheight} ${sizes.margins_desk} 0;
    @media(max-width: 800px) {
        margin: ${sizes.headerheight} 0 0;
    }
`
   

export { ContentWrapper }