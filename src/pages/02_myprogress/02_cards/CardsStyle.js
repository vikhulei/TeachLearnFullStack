import styled from "styled-components";
import { sizes } from "../../../components/01_config/Sizes";
import { colors } from "../../../components/01_config/Colors";
import { MainBodyText } from "../../../components/01_config/MainStyles";

const Wrapper = styled.div`
    max-width: 800px;
    display: flex;
    justify-content: center;
    gap: 30px;
    // padding: 0 ${sizes.margins_desk};
    margin: 0 auto;
    flex-wrap: wrap;
    // background-color: red;
`

const Card = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    background-color: ${colors.greyLight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Image = styled.image`
    width: 80px;
`

const Lesson = styled.div`
    font-weight: bold;
`

export { Wrapper, Card, Image, Lesson }