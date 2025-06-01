import {
    SPopExit,
    SPopExitBlock,
    SPopExitContainer,
    SPopExitForm,
    SPopExitFormGroup, SPopExitNo,
    SPopExitTitle, SPopExitYes
} from "./PopUser.styled.js";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.js";

function PopUser() {

    const navigate = useNavigate();

    const {logout} = useContext(AuthContext);

    const handleLogout = (e) => {
        e.preventDefault();
        logout()
        navigate('/sign-in')
    }

    const handleOnMain = () => {
        navigate('/');
    }


    return(
        <>
            <SPopExit>
                <SPopExitContainer>
                    <SPopExitBlock>
                        <SPopExitTitle>
                            <h2>Выйти из аккаунта?</h2>
                        </SPopExitTitle>
                        <SPopExitForm>
                            <SPopExitFormGroup>
                                <SPopExitYes onClick={handleLogout}>
                                    Да, выйти
                                </SPopExitYes>
                                <SPopExitNo onClick={handleOnMain}>
                                    Нет, остаться
                                </SPopExitNo>
                            </SPopExitFormGroup>
                        </SPopExitForm>
                    </SPopExitBlock>
                </SPopExitContainer>
            </SPopExit>
        </>
    )
}

export default PopUser;