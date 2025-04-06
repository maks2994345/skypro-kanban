import {
    SPopExit,
    SPopExitBlock,
    SPopExitContainer,
    SPopExitForm,
    SPopExitFormGroup, SPopExitNo,
    SPopExitTitle, SPopExitYes
} from "./PopUser.styled.js";

function PopUser() {
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
                                <SPopExitYes id="exitYes">
                                    <a href="modal/signin.html">Да, выйти</a>
                                </SPopExitYes>
                                <SPopExitNo id="exitNo">
                                    <a href="main.html">Нет, остаться</a>
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