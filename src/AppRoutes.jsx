import {useEffect, useState} from 'react'
import './App.css'
import {cardList} from "./data/data.js";
import {Route, Router, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import {SPopExit} from "./components/PopUser/PopUser.styled.js";
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";
import Card from "./components/Card/Card.jsx";
import PopBrowse from "./components/PopBrowse/PopBrowse.jsx";
import Header from "./components/Header/Header.jsx";

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
                <Route path="/" element={<MainPage isLoader={isLoader} cards={cards}/>}/>
                <Route path="/new-card/add" element={<PopNewCard/>}/>
                <Route path="/sign-in" element={<SignInPage/>}/>
                <Route path="/sign-up" element={<SignUpPage/>}/>
                <Route path="/sign-out" element={<SPopExit/>}/>
                <Route path="/card:id" element={<PopBrowse/>} />
            </Routes>

    );
}

export default AppRoutes