import {SHeader, SHeaderBlock, SHeaderButton, SHeaderNav} from "./Header.styled.js";
import {SContainer} from "../Global.styled.js";

function Header (){
    return (
        <SHeader>
            <SContainer>
                <SHeaderBlock>
                    <div className="header__logo _show _light">
                        <a href="" target="_self"><img src="/images/logo.png" alt="logo"/></a>
                    </div>
                    <div className="header__logo _dark">
                        <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo"/></a>
                    </div>
                    <SHeaderNav>
                        <SHeaderButton>
                            <a href="#popNewCard">Создать новую задачу</a>
                        </SHeaderButton>
                        <a href="#user-set-target" className="header__user _hover02">Ivan Ivanov</a>
                        <div className="header__pop-user-set pop-user-set" id="user-set-target">
                            <p className="pop-user-set__name">Ivan Ivanov</p>
                            <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                            <div className="pop-user-set__theme">
                                <p>Темная тема</p>
                                <input type="checkbox" className="checkbox" name="checkbox"/>
                            </div>
                            <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
                        </div>
                    </SHeaderNav>
                </SHeaderBlock>
            </SContainer>
        </SHeader>
    )
}

export default Header