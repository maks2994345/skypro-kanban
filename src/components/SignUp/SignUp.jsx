import AuthForm from "../AuthForm/AuthForm.jsx";

function SignUp({isSignUp, setIsAuth}) {
    return(
        <AuthForm isSignUp={true} setIsAuth={setIsAuth}/>
    )
}

export default SignUp;