import {useState} from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import PopUser from "./components/PopUser/PopUser.jsx";
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";
import PopBrowse from "./components/PopBrowse/PopBrowse.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="wrapper">

                <PopUser />

                <PopNewCard />

                <PopBrowse />

                <Header />

                <Main />

            </div>


        </>
    )
}

export default App
