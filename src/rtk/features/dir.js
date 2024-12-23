import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    dir: "ltr",
}
export const dirSlice = createSlice({
    name: "dir",
    initialState,
    reducers: {
        changeLang: (state, action) => {
            state.dir = action.payload
        }
    }
})

export const { changeLang } = dirSlice.actions;

export default dirSlice.reducer;