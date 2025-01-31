import { configureStore } from "@reduxjs/toolkit";
import arrayReducer from "../features/arraySlide"

const Store = configureStore({
    reducer:{
        array:arrayReducer
    }
})

export default Store