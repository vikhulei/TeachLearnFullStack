import styled from "styled-components";
import { MainWrapper, MainHeader, MainHeading, MainBodyText, OutlineButton,  } from "../../components/01_config/MainStyles";
import { sizes } from "../../components/01_config/Sizes";
import { colors } from "../../components/01_config/Colors";


const Wrapper = styled(MainWrapper)`

`

const Header = styled(MainHeader)`
`

const MyRoadmapWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${sizes.marginsections}; 
`

const CurrentLessonButton = styled(OutlineButton)`
    color: black;
    position: absolute;
    right: ${sizes.sections_mob_marginsides};
    cursor: pointer;
    &:active {
        transform: translate(2px, 2px)
    }
`

const Title = styled(MainHeading)`
`

const MainText = styled(MainBodyText)`
    padding: 0 ${sizes.sections_mob_marginsides};
    z-index: 20;
    text-align: justify;
`

export { Wrapper, MyRoadmapWrapper, Header, CurrentLessonButton, Title, MainText }