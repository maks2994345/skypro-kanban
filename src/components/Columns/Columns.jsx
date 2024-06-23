import CalendarSVG from "../CalendarSVG/CalendarSVG"


function Columns() {
    return(
        <>
            <div className="main__column">
                <div className="column__title">
                    <p>Нужно сделать</p>
                </div>
                <div className="cards">
                    <div className="cards__item">
                        <div className="cards__card card">
                            <div className="card__group">
                                <div className="card__theme _green">
                                    <p className="_green">Research</p>
                                </div>
                                <a href="#popBrowse" target="_self">
                                    <div className="card__btn">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card__content">
                                <a href="" target="_blank">
                                    <h3 className="card__title">Название задачи</h3>
                                </a>
                                <div className="card__date">
                                    <CalendarSVG />
                                    <p>30.10.23</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__column">
                <div className="column__title">
                    <p>В работе</p>
                </div>
                <div className="cards">
                    <div className="cards__item">
                        <div className="cards__card card">
                            <div className="card__group">
                                <div className="card__theme _green">
                                    <p className="_green">Research</p>
                                </div>
                                <a href="#popBrowse" target="_self">
                                    <div className="card__btn">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card__content">
                                <a href="" target="_blank">
                                    <h3 className="card__title">Название задачи</h3>
                                </a>
                                <div className="card__date">
                                    <CalendarSVG />
                                    <p>30.10.23</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cards__item">
                        <div className="cards__card card">
                            <div className="card__group">
                                <div className="card__theme _purple">
                                    <p className="_purple">Copywriting</p>
                                </div>
                                <a href="#popBrowse" target="_self">
                                    <div className="card__btn">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card__content">
                                <a href="" target="_blank">
                                    <h3 className="card__title">Название задачи</h3>
                                </a>
                                <div className="card__date">
                                    <CalendarSVG />
                                    <p>30.10.23</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cards__item">
                        <div className="cards__card card">
                            <div className="card__group">
                                <div className="card__theme _orange">
                                    <p className="_orange">Web Design</p>
                                </div>
                                <a href="#popBrowse" target="_self">
                                    <div className="card__btn">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card__content">
                                <a href="" target="_blank">
                                    <h3 className="card__title">Название задачи</h3>
                                </a>
                                <div className="card__date">
                                    <CalendarSVG />
                                    <p>30.10.23</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__column">
                <div className="column__title">
                    <p>Тестирование</p>
                </div>
                <div className="cards">
                    <div className="cards__item">
                        <div className="cards__card card">
                            <div className="card__group">
                                <div className="card__theme _green">
                                    <p className="_green">Research</p>
                                </div>
                                <a href="#popBrowse" target="_self">
                                    <div className="card__btn">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card__content">
                                <a href="" target="_blank">
                                    <h3 className="card__title">Название задачи</h3>
                                </a>
                                <div className="card__date">
                                    <CalendarSVG />
                                    <p>30.10.23</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__column">
                <div className="column__title">
                    <p>Готово</p>
                </div>
                <div className="cards">
                    <div className="cards__item">
                        <div className="cards__card card">
                            <div className="card__group">
                                <div className="card__theme _green">
                                    <p className="_green">Research</p>
                                </div>
                                <a href="#popBrowse" target="_self">
                                    <div className="card__btn">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card__content">
                                <a href="" target="_blank">
                                    <h3 className="card__title">Название задачи</h3>
                                </a>
                                <div className="card__date">
                                    <CalendarSVG />
                                    <p>30.10.23</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Columns
