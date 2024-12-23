import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    mode: false,
}
export const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.mode = !state.mode
            console.log(state.mode)
        }
    }
})

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;