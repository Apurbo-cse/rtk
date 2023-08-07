import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'; 
import dynamicCounterReducer from '../features/counter/dynamicCounterSlice'; 
import { createLogger } from "redux-logger";

const logger = createLogger()

const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger)
})

export default store;
