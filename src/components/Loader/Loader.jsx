import {SLoader, SLoaderBox} from "./Loader.styled.js";

function Loader() {
    return(
        <SLoader>
            <SLoaderBox>
                <p>Идет загрзука данных...</p>
            </SLoaderBox>
        </SLoader>
    )
}

export default Loader