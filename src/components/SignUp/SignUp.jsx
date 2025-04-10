import AuthForm from "../AuthForm/AuthForm.jsx";

function SignUp({isSignUp}) {
    return(
        <AuthForm isSignUp={isSignUp} />
    )
}

export default SignUp;