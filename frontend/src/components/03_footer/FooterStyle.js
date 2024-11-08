import styled from "styled-components";
import { sizes } from "../01_config/Sizes";

const Wrapper = styled.div`
    position: relative;
    background-color: rgba(7, 83, 91);
    margin: 0 ${sizes.marginsides};
    padding: 10px;
    height: 200px;
    color: white;
    font-size: 1.3rem;
    text-align: center;
    z-index: 99;
`

export { Wrapper }