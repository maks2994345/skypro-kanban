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

function AuthForm({setIsAuth, isSignUp}) {

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsAuth(true)
        navigate('/');
    }

    const handleSignUp = () => {
        navigate('/sign-up')
    }

    const handleSignIn = () => {
        navigate('/sign-in')
    }

    return (
        <>
            <div className="wrapper">
                {isSignUp && (
                    <SContainerSignIn>
                        <SModal>
                            <SModalBlock>
                                <SModalForm>
                                    <SModalTitle>
                                    <h2>Регистрация</h2>
                                </SModalTitle>
                                    <SModalInput type="text" name="first-name"
                                           id="first-name" placeholder="Имя"/>
                                    <SModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта"/>
                                    <SModalInput type="password" name="password" id="formpassword"
                                                 placeholder="Пароль"/>
                                    <SModalButton>
                                        Зарегистрироваться
                                    </SModalButton>
                                    <SModalFormGroup>
                                        <p>Уже есть аккаунт? <a onClick={handleSignIn}>Войдите здесь</a></p>
                                    </SModalFormGroup>
                                </SModalForm>
                            </SModalBlock>
                        </SModal>
                    </SContainerSignIn>
                )}

                {!isSignUp && (
                    <SContainerSignIn>
                        <SModal>
                            <SModalBlock>
                                <SModalTitle>
                                    <h2>Вход</h2>
                                </SModalTitle>
                                <SModalForm>
                                    <SModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта"/>
                                    <SModalInput type="password" name="password" id="formpassword"
                                                 placeholder="Пароль"/>
                                    <SModalButton id="btnEnter" onClick={handleLogin}>
                                        Войти
                                    </SModalButton>
                                    <SModalFormGroup>
                                        <p>Нужно зарегестрироваться?</p>
                                        <a onClick={handleSignUp}>
                                            Регестрируйтесь здесь
                                        </a>
                                    </SModalFormGroup>
                                </SModalForm>
                            </SModalBlock>
                        </SModal>
                    </SContainerSignIn>
                )}

            </div>
        </>
    )
}

export default AuthForm;