import PopBrowse from "../components/PopBrowse/PopBrowse.jsx";

function BrowseModal({editCard, cards}) {


    return (
        <PopBrowse editCard={editCard} cards={cards}/>
    )


}

export default BrowseModal;