import styled from "styled-components"
import { sizes } from "./Sizes"
import { colors } from "./Colors"

const MainWrapper = styled.div`
    position: relative;
    margin: ${sizes.headerheight} ${sizes.margins_desk} 0;
    background-color: #EBEBEB;
    display: flex;
    flex-direction: column;
    gap: ${sizes.marginsections};
    padding-bottom: ${sizes.marginsections};
    @media(max-width: 800px) {
        margin: ${sizes.headerhight_mobile} 0 0;
        
    }
`

const MainHeader = styled.div`
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

const MainFrame = styled.div`
    box-sizing: border-box;
    display: flex;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 0px 10px #D6C9C9;
`


export { MainWrapper, MainHeader, MainBodyText, MainBodyTextColumn, MainHeading, MainHeadingColumn, MainHeadingCapital, OutlineButton, MainFrame  }