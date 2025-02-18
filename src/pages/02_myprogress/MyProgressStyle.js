import styled from "styled-components";
import { sizes } from "../../components/01_config/Sizes";
import { colors } from "../../components/01_config/Colors";


const Wrapper = styled.div`
    position: relative;
    margin: ${sizes.headerheight} ${sizes.margins_desk} 0;
    background-color: #EBEBEB;
    background-colr: red;
    border-bottom: solid 2px white;
    display: flex;
    flex-direction: column;
    gap: ${sizes.marginsections};
    padding-bottom: ${sizes.marginsections};
    @media(max-width: 800px) {
        margin: ${sizes.headerhight_mobile} 0 0;
        
    }
`
const Header = styled.div`
    position: relative;
    padding: 50px;
    background-color: ${colors.myprogress};
    color: white;
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
    @media(max-width: 800px) {
        padding: 30px 0;
        text-align: center;
        font-size: 2rem
    }
`

export { Wrapper, Header }