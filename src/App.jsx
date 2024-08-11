import React, {useEffect, useState} from 'react'

import './App.css'
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard"
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse"
import PopExit from "./components/Popups/PopExit/PopExit"
import {cardList} from "./data/data.js";
import Loader from "./components/Loader/Loader.jsx";


function App() {

    const [cards, setCard ] = useState(cardList);
    const [isLoading, setIsLoading] = useState(true);

    function onCardAdd(newCard){
        setCard([...cards, newCard]);
    }

  useEffect(() => {
  setTimeout(() => { setIsLoading (false)
      }, 2000);
}, [])

    return (
        <div className="wrapper">
            <PopExit/>

            <PopNewCard/>

            <PopBrowse/>

            <Header onCardAdd={onCardAdd}/>

            {
                isLoading
                ? <Loader/>
                : <Main cards={cards}/>
            }

        </div>
    )
}

export default App
