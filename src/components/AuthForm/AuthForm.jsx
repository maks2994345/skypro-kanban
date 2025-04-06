import {
    SContainerSignIn,
    SModal,
    SModalBlock,
    SModalButton,
    SModalForm, SModalFormGroup,
    SModalInput,
    SModalTitle
} from "./AuthForm.styled.js";
import {useNavigate} from "react-router-dom";

function AuthForm() {
    const navigate = useNavigate();
    const handleSignIn = () => {
        navigate('/')
    }

    const handleSignUp = () => {
        navigate('/sign-up')
    }

    return (
        <>
            <div className="wrapper">
                <SContainerSignIn>
                    <SModal>
                        <SModalBlock>
                            <SModalTitle>
                                <h2>Вход</h2>
                            </SModalTitle>
                            <SModalForm>
                                <SModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта"/>
                                <SModalInput type="password" name="password" id="formpassword" placeholder="Пароль"/>
                                <SModalButton id="btnEnter" onClick={handleSignIn}>
                                    Войти
                                </SModalButton>
                                <SModalFormGroup>
                                    <p>Нужно зарегистрироваться?</p>
                                    <a onClick={handleSignUp}>Регистрируйтесь здесь</a>
                                </SModalFormGroup>
                            </SModalForm>
                        </SModalBlock>
                    </SModal>
                </SContainerSignIn>
            </div>
        </>
    )
}

export default AuthForm;