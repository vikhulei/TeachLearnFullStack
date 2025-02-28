import styled from "styled-components";
import { sizes } from "../../../components/01_config/Sizes";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 ${sizes.margins_desk};
    padding: 0 300px;
    flex-wrap: wrap;
`

const Card = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    background-color: grey;
`

export { Wrapper, Card }