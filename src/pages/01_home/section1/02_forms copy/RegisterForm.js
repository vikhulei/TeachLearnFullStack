import { RegisterFormWrapper } from "./RegisterFormStyles"

const RegisterForm = ({registerVisible, makeRegisterVisible}) => {
    return (
        <RegisterFormWrapper
        registerVisible={registerVisible}
        >
            Register
            <button onClick={makeRegisterVisible}>Submit</button>
        </RegisterFormWrapper>
    )
}

export default RegisterForm