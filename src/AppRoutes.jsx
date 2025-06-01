import {useCallback, useEffect, useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import NewCardModal from "./pages/NewCardModal.jsx";
import BrowseModal from "./pages/BrowseModal.jsx";
import UserModal from "./pages/UserModal.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import {deleteCard, fetchCard} from "./services/api.js";

function AppRoutes() {

    const [cards, setCard] = useState([])

    const [error, setError] = useState('');

    const [isLoader, setIsLoader] = useState(false);

    const getCard = useCallback(async () => {
        try {
            setIsLoader(true)
            const data = await fetchCard({
                token: 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck',
            });
            if (data) setCard(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoader(false)
        }
    }, [])

    useEffect(() => {
        getCard()
    }, [getCard])

    const addNewCard = (newCard) => {
        setCard((prevCard) => [...prevCard, newCard])
    }

    const editCard = (editedCard) => {
        setCard(editedCard)
    }


    return (
        <Routes>
            <Route element={<PrivateRoute/>}>
                <Route path="/" element={<MainPage isLoader={isLoader} cards={cards}/>}>
                    <Route path="new-card/add" element={<NewCardModal addNewCard={addNewCard}/>}/>
                    <Route path="card/:id" element={<BrowseModal editCard={editCard} cards={cards}/>}/>
                    <Route path="sign-out" element={<UserModal />}/>
                </Route>
            </Route>
            <Route path="/sign-in" element={<SignInPage />}/>
            <Route path="/sign-up" element={<SignUpPage />}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>

    );
}

export default AppRoutes