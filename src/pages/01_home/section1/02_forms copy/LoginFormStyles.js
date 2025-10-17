import styled from "styled-components"
import { MainInput } from "../../../../components/01_config/MainStyles"
import { colors } from "../../../../components/01_config/Colors"

const LoginFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    // height: 200px;
    width: 90%;
    text-align: left;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.3);
    // display: none;
`

const InputWrapper = styled.div`
    width: 100%;
    line-height: 1.4;
`

const Username = styled(MainInput)`
    width: 100%;
    height: 35px;
`

const Password = styled(Username)`

`

const Caption = styled.div`
    font-size: 1.3rem;
`

const LostPassword = styled.div`
    margin-top: 5px;
    font-style: italic;
    font-size: 0.7rem;
    cursor: pointer;
    &:active {
        color: grey;
    }
`

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // flex-direction: column;
    gap: 100px;
    @media(max-width: 800px) {
        width: 100%;
        align-items: center;
    }
`

const LogIn = styled.button`
    width: 140px;
    height: 40px;
    font-size: 1.3rem;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #5B4ED3;
    @media(max-width: 800px) {
        width: calc(30px + 60vw);
        height: 8vh;
    }
    &:active {
        transform: translate(2px, 2px);
    }
`

const Register = styled.div`
    font-size: 1.3rem;
    color: ${colors.grammar};
    color: darkblue;
    color: white;
    font-weight: 600;
    cursor: pointer;
    &:active {
        transform: translate(2px, 2px);
    }
`

export { LoginFormWrapper, InputWrapper, Username, Password, Caption, LostPassword, ButtonsWrapper, LogIn, Register  }