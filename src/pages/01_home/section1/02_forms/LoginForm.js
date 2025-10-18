import { useState } from "react"
import { LoginFormWrapper, InputWrapper, Username, Password, Caption, LostPassword, EmailSent, ButtonsWrapper, SignUp, LogIn, Cancel, ResetLinkWrapper, SendResetLink, EmailResetLink, Register, RegisterWrapper, WrongLogin } from "./LoginFormStyles"

const LoginForm = ({ loginVisible, setLoginVisible, setHomeSectionDimmed }) => {

    const [usernameValue, setUsernameValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [emailValue, setEmailValue] = useState("")

    const [showResetLink, setShowResetLink] = useState(false)

    const [emailSent, setEmailSent] = useState(false)

    const [showWrongLogin, setShowWrongLogin] = useState(false)

    const clickShowResetLink = (e) => {
        e.preventDefault()
        setShowResetLink(true)
    }

    const clickSendResetLink = (e) => {
        e.preventDefault()
        setEmailSent(true)
    }

    const clickLogin = (e) => {
        e.preventDefault()
        setShowWrongLogin(true)
    }

    const clickCancel = (e) => {
        e.preventDefault()
        setShowResetLink(false)
        setEmailSent(false)
        setLoginVisible(false)
        setShowWrongLogin(false)
        setEmailValue("")
        setHomeSectionDimmed(false)
    }

    return (
        <LoginFormWrapper
            loginVisible={loginVisible}
        >
            <InputWrapper>
                <Caption>Username:</Caption>
                <Username />
            </InputWrapper>
            <InputWrapper>
                <Caption>Password:</Caption>
                <Password type="password" />
                <LostPassword
                    onClick={clickShowResetLink}
                >
                    Lost password?
                    <EmailSent
                        emailSent={emailSent}
                    >
                        Link sent — it may take a moment.</EmailSent>
                </LostPassword>
                <ResetLinkWrapper
                    showResetLink={showResetLink}
                >
                    <EmailResetLink
                        type="email"
                        placeholder="Enter your email"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                    />
                    <SendResetLink
                        onClick={clickSendResetLink}
                    >
                        Send Reset Link
                    </SendResetLink>
                </ResetLinkWrapper>
            </InputWrapper>
            <WrongLogin
                showWrongLogin={showWrongLogin}
            >
                Please check your login details and try again</WrongLogin>
            <ButtonsWrapper>
                <LogIn
                    onClick={clickLogin}
                >
                    Log in</LogIn>
                <Cancel onClick={clickCancel}>Cancel</Cancel>
                {/* <Register
                    onClick={makeRegisterVisible}
                >
                    Register
                </Register> */}

            </ButtonsWrapper>
        </LoginFormWrapper>
    )
}

export default LoginForm