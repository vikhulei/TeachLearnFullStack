import styled from "styled-components"
import { sizes } from "./Sizes"

const MainWrapper = styled.div`
    width: 100vw
`

const MainBodyText = styled.div`
    font-size: 1.3rem;
    line-height: 1.8;    
    color: black;
    padding: 0 ${sizes.sections_mob_marginsides};
    text-align: justify;
`

const MainBodyTextColumn = styled(MainBodyText)`
    text-align: left;
    padding: 0;
`

const MainHeading = styled.div`
    font-size: 2.1rem;
    font-weight: bold;
    color: black;
    padding: 0 ${sizes.sections_mob_marginsides};
`

const MainHeadingColumn = styled(MainHeading)`
    padding: 0;
`

const MainHeadingCapital = styled.div`
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: bold;
`
    
const OutlineButton = styled.button`
    width: 240px;
    height: 70px;
    font-size: 1.1rem;
    color: white;
    border: #D34E4E solid 4px;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);
    @media(max-width: 800px) {
        width: calc(30px + 60vw);
        height: 8vh;
    }
    
`

export { MainWrapper, MainBodyText, MainBodyTextColumn, MainHeading, MainHeadingColumn, MainHeadingCapital, OutlineButton  }