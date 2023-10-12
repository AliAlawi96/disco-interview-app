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
		detailedStore: (state, action) => {
			const specificIndex = state.value.findIndex(
				(el) => el.id == action.payload.id
			);
			if (specificIndex == -1) {
				console.error("Error with updating state: No such id found");
			} else {
				let arrCopy = [...state.value];
				arrCopy[specificIndex] = { ...action.payload };
				state.value = arrCopy;
			}
		},
		append: (state, action) => {
			state.value = [...state.value, action.payload];
		},
	},
});

export const { store, detailedStore, append } = dataSlice.actions;

export default dataSlice.reducer;
