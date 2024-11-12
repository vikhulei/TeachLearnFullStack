import { SvgWrapper } from "../../pages/01_home/HomeStyle"

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