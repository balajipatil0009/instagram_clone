import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
    reducer:{
        admin  : userSlice
    }
})

export default store;