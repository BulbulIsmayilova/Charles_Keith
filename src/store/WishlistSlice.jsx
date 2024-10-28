import { createSlice } from '@reduxjs/toolkit';

export const WishlistSlice = createSlice({
    name: 'WishlistSlice',
    initialState: {
        wishArr: JSON.parse(localStorage.getItem("wish")) || [],
    },
    reducers: {
        setWishArr: (state, action) => {
            const existingItem = state.wishArr.find(item => item.id === action.payload.id);
            if (existingItem) {
                state.wishArr = state.wishArr.filter(item => item.id !== action.payload.id);
            } else {
                state.wishArr.push(action.payload);
            }
            localStorage.setItem("wish", JSON.stringify(state.wishArr));
        },
    },
});

export default WishlistSlice.reducer;
export const { setWishArr } = WishlistSlice.actions;
