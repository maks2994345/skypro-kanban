import {useEffect, useState} from 'react'
import './App.css'
import {cardList} from "./data/data.js";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import PopUser from "./components/PopUser/PopUser.jsx";
import NewCardModal from "./pages/NewCardModal.jsx";
import BrowseModal from "./pages/BrowseModal.jsx";
import UserModal from "./pages/UserModal.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function AppRoutes() {
    const [cards, setCard] = useState(cardList)

    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoader(false);
        }, 3000);
    }, [])

    return (
            <Routes>
                <Route path="/" element={<MainPage isLoader={isLoader} cards={cards}/>}>
                    <Route path="new-card/add" element={<NewCardModal/>}/>
                    <Route path="card/:id" element={<BrowseModal cards={cards}/>} />
                    <Route path="sign-out" element={<UserModal/>} />
                </Route>
                <Route path="/sign-in" element={<SignInPage/>}/>
                <Route path="/sign-up" element={<SignUpPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>

    );
}

export default AppRoutes