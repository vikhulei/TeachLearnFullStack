import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";
import { MainWrapper } from "../../components/01_config/MainStyles";

const Wrapper = styled(MainWrapper)`
    gap: 0;
    padding-bottom: 0;
    // background-color: none;
    // position: relative;
    // margin: ${sizes.headerheight} ${sizes.margins_desk} 0;
    // @media(max-width: 800px) {
    //     margin: ${sizes.headerhight_mobile} 0 0;
    // }
`

export { Wrapper }