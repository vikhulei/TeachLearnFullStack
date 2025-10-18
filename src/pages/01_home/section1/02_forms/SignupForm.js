import { useState } from "react"
import { SignupFormWrapper, InputWrapper, Username, Password, Caption, LostPassword, EmailSent, ButtonsWrapper, SignUp, Cancel,  ResetLinkWrapper, SendResetLink, EmailResetLink, Register } from "./SignupFormStyles"

const SignupForm = ({ signupVisible, setSignupVisible }) => {

    const [usernameValue, setUsernameValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [emailValue, setEmailValue] = useState("")

    const clickLogin = (e) => {
        e.preventDefault()
    }

    const clickCancel = (e) => {
        e.preventDefault()
        setSignupVisible(false)
    }

    return (
        <SignupFormWrapper
            signupVisible={signupVisible}
        >
            <InputWrapper>
                <Caption>Username:</Caption>
                <Username />
            </InputWrapper>
            <InputWrapper>
                <Caption>Password:</Caption>
                <Password type="password" />
            </InputWrapper>
            <ButtonsWrapper>
                <SignUp
                    onClick={clickLogin}
                >
                    Log in</SignUp>
                <Cancel onClick={clickCancel}>Cancel</Cancel>
            </ButtonsWrapper>
        </SignupFormWrapper>
    )
}

export default SignupForm