import { getAllProducts } from "@/services/product.services";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    products:[],
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getproducts: (state, action: PayloadAction<any>) => {   
            console.log('action',action.payload); 
            state.products = action.payload;
        }
    }
});


export const { getproducts } = productSlice.actions;

export default productSlice.reducer;