import styled from "styled-components"

const HambWrapper = styled.div`
    position: absolute;
    right: 90px;
    height: 100%;
    font-size: 30px;
    display: none;
    @media (max-width: 1300px) {
        display: block;
    }
`

export { HambWrapper }