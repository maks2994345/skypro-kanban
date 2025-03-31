import Card from "../Card/Card.jsx";

function Column({cards, title}) {
    return (
        <>
            <div className="main__column column">
                <div className="column__title">
                    <p>{title}</p>
                </div>
                <div className="cards">

                    {
                        cards.map((item) => {
                            return <Card key={item.id} tag={item.theme} title={item.title} date={item.date}  />
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default Column