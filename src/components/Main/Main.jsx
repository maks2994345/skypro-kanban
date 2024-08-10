import Columns from "../Columns/Columns"
import {statusList} from "../../data/statuses.js";

function Main({ cards }) {

    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__content">
                        {
                            statusList.map((item, index) => {

                                const filteredList = cards.filter((card) => card.status === item)

                                return <Columns key={index} title={item} cards={filteredList} />
                            })}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
