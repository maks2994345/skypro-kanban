import Column from "../Column/Column.jsx";
import {statusList} from "../../statusList.js";

function Main({cards}) {
    return (
        <main className="main">
            <div className="container">

                <div className="main__block">
                    <div className="main__content">

                        {
                            statusList.map((item, index) => {

                                const filteredList = cards.filter((card) => card.status === item)

                                return <Column title={item} key={index} cards={filteredList} />
                            })
                        }

                    </div>

                </div>
            </div>
        </main>
    )
}

export default Main