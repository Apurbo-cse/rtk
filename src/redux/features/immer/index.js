import { createStore } from "redux";
import produce from "immer";

const initialState = {
    name: "Apurbo Kumar Anup",
    address:{
        street: "Banani, Dhaka",
        city: "Dhaka",
        state: "Dhaka",
        country: "Bangladesh"
    }
}

const updateStreet = (street) => {
    return {
        type: "street_update",
        payload: street,
    }
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case "street_update":
            return produce(state, draft => {
                draft.address.street = action.payload
            });
        default:
            return state;
    }
}

const store = createStore(reducer);

// store.dispatch(updateStreet("Gulshan, Dhaka")); // Dispatch an action to update the street

// console.log(store.getState()); // Log the state to the console to check if the street was updated correctly
