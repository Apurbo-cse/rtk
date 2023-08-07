import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import counterReducer from '../features/counter/counterSlice'; 
import dynamicCounterReducer from '../features/counter/dynamicCounterSlice'; 
import postReducer from '../features/post/postSlice'

const logger = createLogger()

const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCounter: dynamicCounterReducer,
        post: postReducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger)
})

export default store;
