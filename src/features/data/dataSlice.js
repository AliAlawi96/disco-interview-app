import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		value: [],
	},
	reducers: {
		store: (state, action) => {
			state.value = [action.payload];
		},
		append: (state, action) => {
			state.value = [...state.value, action.payload];
		},
	},
});

export const { increment, decrement, incrementByAmount, store, add } =
	dataSlice.actions;

export default dataSlice.reducer;
