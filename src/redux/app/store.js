import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'; 
import dynamicCounterReducer from '../features/counter/dynamicCounterSlice'; 

const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer
    }
})

export default store;
