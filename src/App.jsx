import {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import PopUser from "./components/PopUser/PopUser.jsx";
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./components/PopBrowse/PopBrowse.jsx";
import {cardList} from "./data/data.js";
import Loader from "./components/Loader/Loader.jsx";
import {GlobalStyled} from "./components/Global.styled.js";

function App() {
    const [cards, setCard] = useState(cardList)

    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoader(false);
        }, 3000);
    }, [])

    return (
        <>
            <GlobalStyled />
            <div className="wrapper">

                <PopUser />

                <PopNewCard />

                <PopBrowse />

                <Header />
                {
                    isLoader ?
                        <Loader />
                        :
                        <Main cards={cards} />
                }

            </div>


        </>
    )
}

export default App
