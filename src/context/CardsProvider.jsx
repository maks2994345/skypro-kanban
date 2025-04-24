import {editCard, fetchCard, postCards} from "../services/api.js";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "./AuthContext.js";
import {CardsContext} from "./CardsContext.js";

function CardsProvider({children}) {

    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const {user} = useContext(AuthContext)

    useEffect(() => {

        const getCards = async () => {
            try {
                const data = await fetchCard({token: user?.token});
                setCards(data)

            } catch (error) {
                console.error("Ошибка загрузки слов", error)
            }
        }
        getCards()

    }, [])

    const addNewCard = async ({card}) => {
        try{
            const newCard = await postCards({token: user?.token, card})
            setCards(newCard)

        } catch (error) {
            console.error("Ошибка добавления карточки", error)
        }
    }

    const editedCard = async ({card, id}) => {
        try{
            const newCard = await editCard({token: user?.token, card, id})
            setCards(newCard)

        } catch (error) {
            console.error("Ошибка редактирования карточки", error)
        }
    }

    return(
        <CardsContext.Provider value={{cards, setCards, loading, error }}>
            {children}
        </CardsContext.Provider>
    )

}

export default CardsProvider
