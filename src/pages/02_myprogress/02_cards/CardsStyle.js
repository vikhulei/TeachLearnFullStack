import styled from "styled-components";
import { colors } from "../../../components/01_config/Colors";

const Wrapper = styled.div`
    max-width: 800px;
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 0 auto;
    flex-wrap: wrap;
`

const Card = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    padding: 40px 0;
    background-color: ${colors.greyLight};
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    &:active {
        transform: translate(2px, 2px);
    }
`

const Image = styled.img`
    height: ${({index}) => index===0 ? "60px" : "80px"};
`

const Lesson = styled.div`
    font-size: 20px;
    font-weight: bold;
`

export { Wrapper, Card, Image, Lesson }