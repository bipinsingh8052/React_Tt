import { configureStore } from "@reduxjs/toolkit";

import couterRd from './Create_slice'
const store =configureStore({
    reducer:{
        name:couterRd
    }
})
export default store;