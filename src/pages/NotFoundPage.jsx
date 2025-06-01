import {SHeader, SHeaderBlock, SHeaderContainer} from "../components/Header/Header.styled.js";
import {GlobalStyled} from "../components/Global.styled.js";
import {useNavigate} from "react-router-dom";

function NotFoundPage() {

    const navigate = useNavigate();

    const handleNavigateBack = () => {
        navigate('/')
    }

    return (
        <>
            <GlobalStyled/>
            <div className="wrapper">
                <SHeader>
                    <SHeaderContainer>
                        <SHeaderBlock>
                            <div className="header__logo _show _light">
                                <a onClick={handleNavigateBack} target="_self">
                                    <img src="/images/logo.png" alt="logo"/>
                                </a>
                            </div>
                            <div className="header__logo _dark">
                                <a href="" target="_self">
                                    <img src="/images/logo_dark.png" alt="logo"/>
                                </a>
                            </div>
                        </SHeaderBlock>
                    </SHeaderContainer>
                </SHeader>
                <div className="not__found">Страница не найдена.</div>
                <button onClick={handleNavigateBack} className="not__found-btn">Перейти на главную страницу</button>
            </div>
        </>
    )
}

export default NotFoundPage;