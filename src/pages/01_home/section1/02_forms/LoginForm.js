import { useState } from "react"
import { LoginFormWrapper, InputWrapper, Username, Password, Caption, LostPassword, ButtonsWrapper, SignUp, LogIn, Cancel, ResetLinkWrapper, SendResetLink, EmailResetLink, Register, RegisterWrapper } from "./LoginFormStyles"

const LoginForm = ({ loginVisible, makeLoginVisible }) => {

    const [showResetLink, setShowResetLink] = useState(false)

    const clickShowResetLink = (e) => {
        e.preventDefault()
        setShowResetLink(!showResetLink)
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
                </LostPassword>
                <ResetLinkWrapper
                    showResetLink={showResetLink}
                >
                    <EmailResetLink
                    type="email"
                    placeholder="Enter your email"
                    />
                    <SendResetLink
                        onClick={makeLoginVisible}
                    >
                        Send Reset Link
                    </SendResetLink>
                </ResetLinkWrapper>
            </InputWrapper>
            <ButtonsWrapper>
                <LogIn onClick={makeLoginVisible}>Log in</LogIn>
                <Cancel onClick={makeLoginVisible}>Cancel</Cancel>
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