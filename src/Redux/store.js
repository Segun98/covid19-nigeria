import {
    configureStore
} from "@reduxjs/toolkit";
import reducer from "./features/covid"

const store = configureStore({
    reducer,
});

export default store;