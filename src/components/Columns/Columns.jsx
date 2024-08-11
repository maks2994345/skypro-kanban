import Cards from "../Cards/Cards.jsx";

function Columns({ title, cards }) {
    return(
        <>
            <div className="main__column">
                <div className="column__title">
                    <p>{title}</p>
                </div>
                <div className="cards">
                    {
                        cards.map((item) => {

                        return(
                            <Cards key={item.id} tag={item.theme} title={item.title} date={item.date}
                            />
                        )

                        }
                    )}

                </div>
            </div>
        </>
    )
}

export default Columns
