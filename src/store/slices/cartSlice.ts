import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Order } from "@/lib/drizzle";


export interface cartState {
    items: Order[];
}

const initialState: cartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Order>) => {
            state.items = [...state.items, action.payload];
        },
        deleteFromCart: (state, action: PayloadAction<{ _id: string; }>) => {

        }
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
