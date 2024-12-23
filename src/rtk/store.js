import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './features/postSlice'
import modeReducer from './features/mode'
import dirReducer from './features/dir'
import authSlice from './features/authSlice'
import userSlice from "./features/userSlice"
export const store = configureStore({
    reducer: {
        posts: postsReducer,
        mode: modeReducer,
        dir: dirReducer,
        auth: authSlice,
        user: userSlice
    },
})