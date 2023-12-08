import {createSlice, configureStore} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState: {count:0, countShown: true},
    reducers:{
        increment(state){
             state.count++
        },
        decrement(state){
            state.count--
        },
        increase(state,action){
            state.count = state.count + action.payload
        },
        toggler(state){
            state.countShown = ! state.countShown
        }
    }
});

const authSlice = createSlice({
    name:"auth",
    initialState: {authAuthentication:false},
    reducers:{
        login(state){
            state.authAuthentication= true;
        },
        logout(state){
            state.authAuthentication= false;
        }
    }
})

const store = configureStore({
    reducer: {counter:counterSlice.reducer,auth:authSlice.reducer }
});
export const sliceActions = counterSlice.actions 
export const authActions = authSlice.actions;
export default store;