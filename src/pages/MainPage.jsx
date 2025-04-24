import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import Loader from "../components/Loader/Loader.jsx";
import {GlobalStyled} from "../components/Global.styled.js";
import {Outlet} from "react-router-dom";
import CardsProvider from "../context/CardsProvider.jsx";

function MainPage({isLoader, cards}) {

    return (
        <>
            <CardsProvider>
                <GlobalStyled/>
                <div className="wrapper">

                    <Header/>
                    {
                        isLoader ?
                            <Loader/>
                            :
                            <Main cards={cards}/>
                    }

                    <Outlet/>

                </div>

            </CardsProvider>
        </>
    )
}

export default MainPage
