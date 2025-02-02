import styled from "styled-components"
import { sizes } from "../../../components/01_config/Sizes"

const SvgWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: ${sizes.blockOneHeight};
    z-index: 50;
    @media(max-width: 800px) {
        display: none;
        // background-color: darkblue;
        right: 0;
        left: 0;
        
    }
`

const Svg = () => {
    return (
        <SvgWrapper>
            <svg width="100%" height="100%">
                <defs>7
                    <mask id="mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        <circle cx="35%" cy="42%" r="20%" fill="black" />
                    </mask>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" mask="url(#mask)" fill="rgba(7, 83, 91, 0.65)" />
            </svg>
        </SvgWrapper>
    )
}

export default Svg