import {
    SContainerSignIn,
    SModal,
    SModalBlock,
    SModalButton,
    SModalForm, SModalFormGroup,
    SModalTitle
} from "./AuthForm.styled.js";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {signIn, signUp} from "../../services/auth.js";
import BaseInput from "../BaseInput.jsx";
import {AuthContext} from "../../context/AuthContext.js";

function AuthForm({isSignUp}) {

    const {updateUserInfo} = useContext(AuthContext);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        login: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        login: "",
        password: "",
    });

    const [error, setError] = useState("")

    const validateForm = () => {
        const newErrors = {name: "", login: "", password: ""};
        let isValid = true

        if (isSignUp && !formData.name.trim()) {
            newErrors.name = true;
            setError("Заполните все поля!");
            isValid = false
        }

        if (!formData.login.trim()) {
            newErrors.login = true
            setError("Заполните все поля!")
            isValid = false
        }

        if (!formData.password.trim()) {
            newErrors.password = true;
            setError("Заполните все поля!")
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
        setErrors({...errors, [name]: false})
        setError("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return
        }

        try {
            const data = !isSignUp
                ? await signIn({login: formData.login, password: formData.password})
                : await signUp(formData)

            if (data) {
                updateUserInfo(data)
                navigate("/")
            }
        } catch (err) {
            setError(err.message || "Что-то пошло не так.")
        }
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
                                <SModalForm onSubmit={handleSubmit}>
                                    <SModalTitle>
                                        <h2>Регистрация</h2>
                                    </SModalTitle>
                                    <BaseInput
                                        error={errors.name}
                                        type="text"
                                        name="name"
                                        id="formname"
                                        placeholder="Имя"
                                        value={formData.name}
                                        onChange={handleChange}

                                    />
                                    <BaseInput
                                        error={errors.login}
                                        type="text"
                                        name="login"
                                        id="formlogin"
                                        placeholder="Эл.почта"
                                        value={formData.login}
                                        onChange={handleChange}
                                    />

                                    <BaseInput
                                        error={errors.password}
                                        type="password"
                                        name="password"
                                        id="formpassword"
                                        placeholder="Пароль"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    {error && <p style={{color: "red"}}>{error}</p>}
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
                                <SModalForm onSubmit={handleSubmit}>
                                    <BaseInput
                                        error={errors.login}
                                        type="text"
                                        name="login"
                                        id="formlogin"
                                        placeholder="Эл.почта"
                                        value={formData.login}
                                        onChange={handleChange}
                                    />

                                    <BaseInput
                                        error={errors.password}
                                        type="password"
                                        name="password"
                                        id="formpassword"
                                        placeholder="Пароль"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    {error && <p style={{color: "red"}}>{error}</p>}
                                    <SModalButton>
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