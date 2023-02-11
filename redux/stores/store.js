import { configureStore } from "@reduxjs/toolkit";
import valuationSlice from "../reducers/valuationSlice";
export default configureStore({
    reducer: {
        valuation: valuationSlice
    }
})
