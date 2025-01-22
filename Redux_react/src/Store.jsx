import { configureStore } from "@reduxjs/toolkit";

import couterRd from './Create_slice'

const store =configureStore({
    reducer:{

        // this is declear it samename when you declear it in slice
        // name:"counter"
        counter:couterRd
    }
})
export default store;