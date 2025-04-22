import {useCallback, useEffect, useState} from 'react'
import './App.css'
import {data, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import NewCardModal from "./pages/NewCardModal.jsx";
import BrowseModal from "./pages/BrowseModal.jsx";
import UserModal from "./pages/UserModal.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import {fetchCard, postCards} from "./services/api.js";

function AppRoutes() {
    const [isAuth, setIsAuth] = useState(false);

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


    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth}/>}>
                <Route path="/" element={<MainPage isLoader={isLoader} cards={cards}/>}>
                    <Route path="new-card/add" element={<NewCardModal addNewCard={addNewCard}/>}/>
                    <Route path="card/:id" element={<BrowseModal cards={cards}/>}/>
                    <Route path="sign-out" element={<UserModal setIsAuth={setIsAuth}/>}/>
                </Route>
            </Route>
            <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth}/>}/>
            <Route path="/sign-up" element={<SignUpPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>

    );
}

export default AppRoutes