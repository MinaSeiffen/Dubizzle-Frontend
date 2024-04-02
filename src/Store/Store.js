import { configureStore } from "@reduxjs/toolkit";
import FavouriteReducer from "./Slices/Favorites";

const StroeConfig = configureStore({
    reducer: {
        favourite: FavouriteReducer
    }
})


export default StroeConfig