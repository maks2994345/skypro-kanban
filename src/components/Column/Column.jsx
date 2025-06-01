import Card from "../Card/Card.jsx";
import {SCards, SColumnTitle, SMainColumn} from "./Column.styled.js";
import {SkeletonCard} from "../Card/Card.styled.js";


function Column({isLoader, cards, title}) {
    return (
        <>
            <SMainColumn>
                <SColumnTitle>
                    <p>{title}</p>
                </SColumnTitle>
                {
                    isLoader ? (
                            <SCards>
                                {[...Array(4)].map((_, i) => <SkeletonCard key={i}/>)}
                            </SCards>
                        ) :
                        (
                            <SCards>
                                {
                                    cards.map((item) => {
                                        return <Card key={item.id}
                                                     id={item._id}
                                                     topic={item.topic}
                                                     title={item.title}
                                                     date={item.date}
                                        />
                                    })
                                }
                            </SCards>
                        )
                }
            </SMainColumn>
        </>
    )
}

export default Column