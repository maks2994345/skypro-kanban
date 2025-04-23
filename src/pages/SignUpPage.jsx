import SignUp from "../components/SignUp/SignUp.jsx";
import {useState} from "react";

function SignUpPage ({setIsAuth}) {

    const [isSignUp, setIsSignUp] = useState(true);

    return(
        <SignUp isSignUp={isSignUp} setIsAuth={setIsAuth} />
    )
}

export default SignUpPage;