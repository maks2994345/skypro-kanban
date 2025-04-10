import SignUp from "../components/SignUp/SignUp.jsx";
import {useState} from "react";

function SignUpPage () {

    const [isSignUp, setIsSignUp] = useState(true);

    return(
        <SignUp isSignUp={isSignUp} />
    )
}

export default SignUpPage;