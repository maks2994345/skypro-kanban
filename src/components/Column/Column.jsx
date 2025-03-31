import Card from "../Card/Card.jsx";
import {SColumnTitle, SMainColumn} from "./Column.styled.js";

function Column({cards, title}) {
    return (
        <>
            <SMainColumn>
                <SColumnTitle>
                    <p>{title}</p>
               </SColumnTitle>
                <div className="cards">

                    {
                        cards.map((item) => {
                            return <Card key={item.id} tag={item.theme} title={item.title} date={item.date}  />
                        })
                    }

                </div>

            </SMainColumn>
        </>
    )
}

export default Column