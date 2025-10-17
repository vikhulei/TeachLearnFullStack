import styled from "styled-components";

const RegisterFormWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    display: ${({registerVisible}) => (registerVisible) ? "block" : "none"};
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.7);
    // visibility: hidden;
`

export { RegisterFormWrapper }