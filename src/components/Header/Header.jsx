import {
    SHeader,
    SHeaderBlock,
    SHeaderButton, SHeaderContainer,
    SHeaderNav, SHeaderPopUserEmail,
    SHeaderPopUserName,
    SHeaderPopUserSet,
    SHeaderUser, SPopUserButton, SPopUserInput, SPopUserSetTheme
} from "./Header.styled.js";
import {useNavigate} from "react-router-dom";



function Header (){
    const navigate = useNavigate();

    const handleCreateNewCard = () => {
        navigate('/new-card/add')
    }

    const handleSignOut = () => {
        navigate('/sign-out');
    }

    return (
        <SHeader>
            <SHeaderContainer>
                <SHeaderBlock>
                    <div className="header__logo _show _light">
                        <a href="" target="_self">
                            <img src="/images/logo.png" alt="logo"/>
                        </a>
                    </div>
                    <div className="header__logo _dark">
                        <a href="" target="_self">
                            <img src="/images/logo_dark.png" alt="logo"/>
                        </a>
                    </div>
                    <SHeaderNav>
                        <SHeaderButton onClick={handleCreateNewCard}>
                             Создать новую задачу
                        </SHeaderButton>
                        <SHeaderUser href="#user-set-target">Ivan Ivanov</SHeaderUser>
                        <SHeaderPopUserSet id="user-set-target">
                            <SHeaderPopUserName>Ivan Ivanov</SHeaderPopUserName>
                            <SHeaderPopUserEmail>ivan.ivanov@gmail.com</SHeaderPopUserEmail>
                            <SPopUserSetTheme>
                                <p>Темная тема</p>
                                <SPopUserInput type="checkbox" name="checkbox"></SPopUserInput>
                            </SPopUserSetTheme>
                            <SPopUserButton onClick={handleSignOut}>
                                Выйти
                            </SPopUserButton>
                        </SHeaderPopUserSet>
                    </SHeaderNav>
                </SHeaderBlock>
            </SHeaderContainer>
        </SHeader>
    )
}

export default Header