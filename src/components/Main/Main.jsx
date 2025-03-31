import Column from "../Column/Column.jsx";
import {statusList} from "../../statusList.js";
import {SMain, SMainBlock, SMainContent} from "./Main.styled.js";
import {SContainer} from "../Global.styled.js";

function Main({cards}) {
    return (
        <SMain>
            <SContainer>
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
            </SContainer>
        </SMain>
    )
}

export default Main