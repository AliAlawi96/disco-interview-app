import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/slices/dataSlice";
import loadingReducer from "../features/slices/loadingSlice";
import counterReducer from "../features/slices/counterSlice";

export default configureStore({
	reducer: {
		data: dataReducer,
		loading: loadingReducer,
		counter: counterReducer,
	},
});
