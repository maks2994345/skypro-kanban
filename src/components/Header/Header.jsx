import {useState} from "react";


function Header({ onCardAdd }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState)
}

    function handleOpen(event) {
        event.preventDefault()

        const date = new Date()
        const newCard = {
            id: date.getTime(),
            theme: "Web Design",
            title: "Задача",
            date: date.getDate(),
            status: "Без статуса"
        }

        onCardAdd(newCard)
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <div className="header__logo _show _light">
                        <a href="" target="_self"><img src="/images/logo.png" alt="logo"/></a>
                    </div>
                    <div className="header__logo _dark">
                        <a href="" target="_self"><img src="/images/logo_dark.png" alt="logo"/></a>
                    </div>
                    <nav className="header__nav">
                        <button onClick={handleOpen} className="header__btn-main-new _hover01" id="btnMainNew">
                            <a href="#popNewCard">Создать новую задачу</a>
                        </button>
                        <a onClick={toggleDropdown} href="#user-set-target" className="header__user _hover02">Ivan Ivanov</a>
                        {isOpen && (
                            <div className="header__pop-user-set pop-user-set" id="user-set-target">
                                <p className="pop-user-set__name">Ivan Ivanov</p>
                                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                                <div className="pop-user-set__theme">
                                    <p>Темная тема</p>
                                    <input type="checkbox" className="checkbox" name="checkbox"/>
                                </div>
                                <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
