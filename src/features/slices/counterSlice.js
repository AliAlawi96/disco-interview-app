import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "data",
	initialState: {
		value: 2,
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
	},
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
