import {createSlice} from '@reduxjs/toolkit';

// npm i @reduxjs.toolkit
// npm i react-redux

const counter =createSlice({
    name:"counter",
    initialState:{value:0},
    reducers:{
        inc:(state)=>{state.value+=1},
        dec:(state)=>{state.value-=1}
    }
})

// decher the object 
export  const {inc,dec}=counter.actions;
export default counter.reducer;



// what is slice 



// what is state 
// when you do changes in you ui is called state

// what is reducers
// it is function


// use selector 
// is is a hook you can select the value(item)

// use Dispatch
// this is a hook you can perform the action (is means you can change the value)