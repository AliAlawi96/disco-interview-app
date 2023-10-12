import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		value: [],
	},
	reducers: {
		store: (state, action) => {
			state.value = [...action.payload];
		},
		append: (state, action) => {
			state.value = [...state.value, action.payload];
		},
	},
});

export const { store, append } = dataSlice.actions;

export default dataSlice.reducer;
