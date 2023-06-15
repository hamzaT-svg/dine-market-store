import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductDetail } from "../../../types";

export type CartItem = {
    _id: string,
    name: string,
    type: string,
    price: number,
    imgSrc: string,
};


export interface cartState {
    items: CartItem[];
}

const initialState: cartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.items = [...state.items, action.payload];
        },
        deleteFromCart: (state, action: PayloadAction<{ _id: string; }>) => {

        }
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
