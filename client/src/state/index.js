import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    userId: "644c1ea19e26ee197b88bf9a",
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? "dark": 'light';
        }
    }
})

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;