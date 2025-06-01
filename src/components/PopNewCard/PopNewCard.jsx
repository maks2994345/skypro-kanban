import Calendar from "../Calendar/Calendar.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {postCards} from "../../services/api.js";

function PopNewCard({addNewCard}) {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/')
    }

    const [title, setTitle] = useState('');

    const [description, setDescription] = useState('');

    const [topic, setTopic] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        let color = "gray"
        if (topic === "Web Design") color = "orange"
        if (topic === "Research") color = "green"
        if (topic === "Copywriting") color = "purple"

        const newCard = {
            title: title,
            status: 'Без статуса',
            description: description,
            date: new Date().toISOString(),
            color: color
        };

        try {
            const createdCard = await postCards({
                token: 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck',
                card: newCard
            });

            addNewCard(createdCard)

            navigate('/')

        } catch (err) {
            err.message;
        }
    }

     useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <>
            <div className="pop-new-card">
                <div className="pop-new-card__container">
                    <div className="pop-new-card__block">
                        <div className="pop-new-card__content">
                            <h3 className="pop-new-card__ttl">Создание задачи</h3>
                            <a onClick={handleClose} className="pop-new-card__close">&#10006;</a>
                            <div className="pop-new-card__wrap">
                                <form onSubmit={handleSubmit} className="pop-new-card__form form-new" id="formNewCard"
                                      action="#">
                                    <div className="form-new__block">
                                        <label htmlFor="formTitle" className="subttl">Название задачи</label>
                                        <input onChange={(e) => setTitle(e.target.value)} value={title}
                                               className="form-new__input"
                                               type="text" name="name" id="formTitle"
                                               placeholder="Введите название задачи..." autoFocus/>
                                    </div>
                                    <div className="form-new__block">
                                        <label htmlFor="textArea" className="subttl">Описание задачи</label>
                                        <textarea onChange={(e) => setDescription(e.target.value)} value={description}
                                                  className="form-new__area" name="text" id="textArea"
                                                  placeholder="Введите описание задачи..."></textarea>
                                    </div>
                                </form>
                                <Calendar/>
                            </div>
                            <div className="pop-new-card__categories categories">
                                <p className="categories__p subttl">Категория</p>
                                <div className="categories__themes">
                                    <div
                                        className={`categories__theme _orange ${topic === "Web Design" ? "_active-category" : ""}`}
                                        onClick={() => setTopic("Web Design")}>
                                        <p className="_orange">Web Design</p>
                                    </div>
                                    <div
                                        className={`categories__theme _green ${topic === "Research" ? "_active-category" : ""}`}
                                        onClick={() => setTopic("Research")}>
                                        <p className="_green">Research</p>
                                    </div>
                                    <div
                                        className={`categories__theme _purple ${topic === "Copywriting" ? "_active-category" : ""}`}
                                        onClick={() => setTopic("Copywriting")}>
                                        <p className="_purple">Copywriting</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleSubmit} className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopNewCard