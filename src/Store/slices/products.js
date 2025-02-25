import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Axiosconfig/Axiosconfig";

export const productreduce = createAsyncThunk("products/getall", async () => {
    const res = await axiosInstance.get("products")
    return res.data
})

const products = createSlice({
    name: "products",
    initialState: { products: [] },
    extraReducers: (builder) => {
        builder.addCase(productreduce.fulfilled, (state, action) => {
            state.products = action.payload
        })
        // builder.addCase(productaction.rejected, (state, action) => {
        // })
        // builder.addCase(productaction.pending, (state, action) => {
        // })
    }

})

export default products.reducer

