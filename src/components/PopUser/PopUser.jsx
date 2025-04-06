import {
    SPopExit,
    SPopExitBlock,
    SPopExitContainer,
    SPopExitForm,
    SPopExitFormGroup, SPopExitNo,
    SPopExitTitle, SPopExitYes
} from "./PopUser.styled.js";
import {useNavigate} from "react-router-dom";

function PopUser() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/sign-up');
    }

    const handleOnMain = () => {
        navigate('/');
    }

    return(
        <>
            <SPopExit id="popExit">
                <SPopExitContainer>
                    <SPopExitBlock>
                        <SPopExitTitle>
                            <h2>Выйти из аккаунта?</h2>
                        </SPopExitTitle>
                        <SPopExitForm id="formExit">
                            <SPopExitFormGroup>
                                <SPopExitYes id="exitYes" onClick={handleLogout}>
                                    Да, выйти
                                </SPopExitYes>
                                <SPopExitNo id="exitNo" onClick={handleOnMain}>
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