import {useNavigate, useParams} from "react-router-dom";
import Calendar from "../Calendar/Calendar.jsx";
import {useEffect, useState} from "react";

function PopBrowse({editCard, cards}) {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const { id } = useParams();

    const card = cards.find(item => item._id === id);

    const handleClose = () => {
        navigate('/')
    }

      const toggleChangeMenu = () => {
        setIsOpen(prev => !prev);
    }

     useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <>
            <div className="pop-browse">
                <div className="pop-browse__container">
                    <div className="pop-browse__block">
                        <div className="pop-browse__content">
                            <div className="pop-browse__top-block">
                                <h3 className="pop-browse__ttl">{card.title}</h3>
                                <div className="categories__theme theme-top _orange _active-category">
                                    <p className="">{card.topic}</p>
                                </div>
                            </div>
                            <div className="pop-browse__status status">
                                <p className="status__p subttl">Статус</p>
                                <div className="status__themes">
                                    <div className="status__theme _hide">
                                        <p>Без статуса</p>
                                    </div>
                                    <div className="status__theme _gray">
                                        <p className="_gray">{card.status}</p>
                                    </div>
                                    <div className="status__theme _hide">
                                        <p>В работе</p>
                                    </div>
                                    <div className="status__theme _hide">
                                        <p>Тестирование</p>
                                    </div>
                                    <div className="status__theme _hide">
                                        <p>Готово</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pop-browse__wrap">
                                <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                                    <div className="form-browse__block">
                                        <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                                        <textarea className="form-browse__area" name="text" id="textArea01" readOnly
                                                  placeholder="Введите описание задачи...">
                                        </textarea>
                                    </div>
                                </form>
                                <Calendar/>
                            </div>
                            <div className="theme-down__categories theme-down">
                                <p className="categories__p subttl">Категория</p>
                                <div className="categories__theme _orange _active-category">
                                    <p className="_orange">Web Design</p>
                                </div>
                            </div>
                            <div className="pop-browse__btn-browse ">
                                <div className="btn-group">
                                    <button onClick={toggleChangeMenu} className="btn-browse__edit _btn-bor _hover03">
                                        Редактировать задачу
                                    </button>
                                    <button className="btn-browse__delete _btn-bor _hover03">
                                        Удалить задачу
                                    </button>
                                </div>
                                <button className="btn-browse__close _btn-bg _hover01" onClick={handleClose} >
                                    Закрыть
                                </button>
                            </div>
                            {isOpen && (
                            <div className="pop-browse__btn-edit _hide">
                                <div className="btn-group">
                                    <button className="btn-edit__edit _btn-bg _hover01">
                                        <a href="#">Сохранить</a>
                                    </button>
                                    <button className="btn-edit__edit _btn-bor _hover03">
                                        <a href="#">Отменить</a>
                                    </button>
                                    <button className="btn-edit__delete _btn-bor _hover03">
                                        Удалить задачу
                                    </button>
                                </div>
                                <button className="btn-edit__close _btn-bg _hover01">
                                    Закрыть
                                </button>
                            </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopBrowse