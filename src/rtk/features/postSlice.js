import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
}
export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts = [action.payload, ...state.posts]
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        addComment: (state, action) => {
            const { postId, comment } = action.payload;
            const post = state.posts.find(post => post.id === postId);
            if (post) {
                post.replies = [comment, ...post.replies];
            }
        },
        removeComment: (state, action) => {
            const { postId, commentId } = action.payload;
            const post = state.posts.find(post => post.id === postId);
            if (post) {
                post.replies = post.replies.filter(comment => comment.id !== commentId);
            }
        },
        addLike: (state, action) => {
            const post = state.posts.find(post => post.id === action.payload);
            if (post) {
                post.likes += 1;
            }
        },
        removeLike: (state, action) => {
            const post = state.posts.find(post => post.id === action.payload);
            if (post && post.likes > 0) {
                post.likes -= 1;
            }
        }
    },
})
export const { addPost, removePost, addComment, removeComment, addLike, removeLike } = postSlice.actions
export default postSlice.reducer
