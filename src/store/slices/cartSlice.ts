import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface cartState {
    items: string[];
}

const initialState: cartState = {
    items: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        updateCart: (state, action: PayloadAction<string[]>) => {
            state.items = action.payload;
        },
    },
});

export const { updateCart } = cartSlice.actions;
export default cartSlice.reducer;
