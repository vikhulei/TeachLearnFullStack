import { LoginFormWrapper, InputWrapper, Username, Password, Caption, LostPassword, ButtonsWrapper, SignUp, LogIn, Register, RegisterWrapper  } from "./LoginFormStyles"

const LoginForm = ({makeRegisterVisible}) => {
    return (
        <LoginFormWrapper>
            <InputWrapper>
                <Caption>Username:</Caption>
                <Username />
            </InputWrapper>
            <InputWrapper>
                <Caption>Password:</Caption>
                <Password />
                <LostPassword>Lost password?</LostPassword>
            </InputWrapper>
            <ButtonsWrapper>
                <LogIn>Log in</LogIn>
                <Register
                    onClick={makeRegisterVisible}
                >
                    Register
                </Register>

            </ButtonsWrapper>
        </LoginFormWrapper>
    )
}

export default LoginForm