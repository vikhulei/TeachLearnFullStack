import styled from "styled-components";
import { sizes } from "../../../components/01_config/Sizes";
import { colors } from "../../../components/01_config/Colors";
import { MainBodyText } from "../../../components/01_config/MainStyles";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    padding: 0 ${sizes.margins_desk};
    padding: 0 300px;
    flex-wrap: wrap;
`

const Card = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    background-color: ${colors.greyLight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Image = styled.image`
    width: 80px;
`

const Lesson = styled(MainBodyText)`
    font-weight: bold;
`

export { Wrapper, Card, Image, Lesson }