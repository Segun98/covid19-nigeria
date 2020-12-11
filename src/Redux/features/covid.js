import {
    createSlice
} from "@reduxjs/toolkit";
import axios from 'axios'

//initialstate
let initialState = {
    data: {},
    loading: false,
    error: "",
};

//slice that generates reducers and actions
const covidSlice = createSlice({
    name: "covid",
    initialState,
    reducers: {
        load(state, action) {
            state.data = {};
            state.loading = true;
            state.error = ""
        },
        getCovidData(state, action) {
            //Payload from thunk
            let data = action.payload;
            state.data = data;
            state.loading = false;
            state.error = ""
        },
        errorResponse(state, action) {
            state.error = action.payload
            state.data = {};
            state.loading = false;
        },
    },
});

//reducer function
export default covidSlice.reducer;

//actons
const {
    getCovidData,
    errorResponse,
    load
} = covidSlice.actions;

// fetch covid data thunk
export function covidThunk() {
    return async (dispatch) => {
        try {
            dispatch(load())
            const res = await axios.get(`https://covidnigeria.herokuapp.com/api`)
            const data = res.data.data
            dispatch(getCovidData(data))
        } catch (error) {
            dispatch(errorResponse(error.message))
        }
    };
}