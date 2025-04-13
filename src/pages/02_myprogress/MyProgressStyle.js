import styled from "styled-components";
import { MainWrapper, MainHeader, MainHeading, MainBodyText, OutlineButton, } from "../../components/01_config/MainStyles";
import { sizes } from "../../components/01_config/Sizes";

const Wrapper = styled(MainWrapper)`

`

const Header = styled(MainHeader)`
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    @media(max-width: 800px) {
        justify-content: center;
    }
`

const Title = styled(MainHeading)`

`

const CurrentLessonButton = styled(OutlineButton)`
    color: black;
    // position: absolute;
    margin-right: ${sizes.sections_mob_marginsides};
    // padding: 0 ${sizes.sections_mob_marginsides};
    cursor: pointer;
    &:active {
        transform: translate(2px, 2px)
    }
    @media(max-width: 800px) {
        width: 240px;
        height: 70px;
        margin-right: 0;
    }
`


const MyRoadmapWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${sizes.marginsections}; 
`


const MainText = styled(MainBodyText)`
    padding: 0 ${sizes.sections_mob_marginsides};
    z-index: 20;
    text-align: justify;
`

export { Wrapper, MyRoadmapWrapper, Header, CurrentLessonButton, TitleWrapper, Title, MainText }