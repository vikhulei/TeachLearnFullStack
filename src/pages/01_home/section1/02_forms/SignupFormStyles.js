import styled from "styled-components"
import { MainInput } from "../../../../components/01_config/MainStyles"
import { colors } from "../../../../components/01_config/Colors"

const SignupFormWrapper = styled.form`
    position: absolute;
    right: 30px;
    bottom: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    width: 500px;
    text-align: left;
    padding: 20px;
    color: white;
    background-color: rgba(200, 200, 200, 1);
    background-color: ${colors.mainDark}; 
    display: ${({signupVisible}) => signupVisible ? "flex" : "none"};
    z-index: 100;
`

const InputWrapper = styled.div`
    width: 100%;
    line-height: 1.4;
`

const Username = styled(MainInput)`
    width: 100%;
    height: 28px;
`

const Password = styled(Username)`

`

const Caption = styled.div`
    font-size: 1rem;
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

const EmailSent = styled.span`
    font-size: 0.7rem;
    color: darkred;
`

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 20px;
    @media(max-width: 800px) {
        width: 100%;
        align-items: center;
    }
`

const SignUp = styled.button`
    width: 140px;
    height: 35px;
    font-size: 1rem;
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

const Cancel = styled(SignUp)`
    background-color: grey;
`

const ResetLinkWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    display: ${({showResetLink}) => showResetLink ? "flex" : "none"};
`
const EmailResetLink = styled(Username)`
    height: 20px;
    font-size: 0.6rem;
`

const SendResetLink = styled(SignUp)`
    height: 20px;
    font-size: 0.6rem;
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

export { SignupFormWrapper, InputWrapper, Username, Password, Caption, LostPassword, EmailSent, ButtonsWrapper, SignUp, Cancel,  ResetLinkWrapper, SendResetLink, EmailResetLink, Register  }