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
import {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext.js";

function Header (){

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const toggleUserMenu = () => {
    setIsOpen(prev => !prev);
};

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
                        <SHeaderUser onClick={toggleUserMenu}>{user.name}</SHeaderUser>
                        {isOpen && (
                            <SHeaderPopUserSet>
                            <SHeaderPopUserName>{user.name}</SHeaderPopUserName>
                            <SHeaderPopUserEmail>{user.login}</SHeaderPopUserEmail>
                            <SPopUserSetTheme>
                                <p>Темная тема</p>
                                <SPopUserInput type="checkbox" name="checkbox"></SPopUserInput>
                            </SPopUserSetTheme>
                            <SPopUserButton onClick={handleSignOut}>
                                Выйти
                            </SPopUserButton>
                        </SHeaderPopUserSet>
                        )}
                    </SHeaderNav>
                </SHeaderBlock>
            </SHeaderContainer>
        </SHeader>
    )
}

export default Header