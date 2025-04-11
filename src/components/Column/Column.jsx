import Card from "../Card/Card.jsx";
import {SCards, SColumnTitle, SMainColumn} from "./Column.styled.js";


function Column({cards, title}) {
    return (
        <>
            <SMainColumn>
                <SColumnTitle>
                    <p>{title}</p>
                </SColumnTitle>
                <SCards>

                    {
                        cards.map((item) => {
                            return <Card key={item.id} id={item.id} tag={item.theme} title={item.title} date={item.date}/>
                        })
                    }

                </SCards>
            </SMainColumn>
        </>
    )
}

export default Column