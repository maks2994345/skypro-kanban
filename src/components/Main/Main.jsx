import Column from "../Column/Column.jsx";
import {statusList} from "../../data/statusList.js";
import {SMain, SMainBlock, SMainContainer, SMainContent} from "./Main.styled.js";

function Main({cards}) {
    return (
        <SMain>
            <SMainContainer>
                <SMainBlock>
                    <SMainContent>

                        {
                            statusList.map((item, index) => {

                                const filteredList = cards.filter((card) => card.status === item)

                                return <Column title={item} key={index} cards={filteredList} />
                            })
                        }

                    </SMainContent>

                </SMainBlock>
            </SMainContainer>
        </SMain>
    )
}

export default Main