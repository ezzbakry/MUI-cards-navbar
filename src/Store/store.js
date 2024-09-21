import { configureStore } from "@reduxjs/toolkit";
import productreduce from './slices/products'

const store =configureStore({
    reducer:{
        products:productreduce

    }
})
export default store;