import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: "",
  username: "",
  fullName: "",
  password: "",
  identifier: "",
  isCreateAccountModalOpen: false,
  isSignInModalOpen: false,
  isAuthenticated: false,
  user: null,
};

const customReducer = (state, action) => {
  switch (action.type) {
    case 'auth/setFormData':
      return { ...state, ...action.payload };
    case 'auth/toggleCreateAccountModal':
      return { ...state, isCreateAccountModalOpen: !state.isCreateAccountModalOpen };
    case 'auth/toggleSignInModal':
      return { ...state, isSignInModalOpen: !state.isSignInModalOpen };
    case 'auth/setAuthenticated':
      return { ...state, isAuthenticated: action.payload };
    case 'auth/setUser':
      return { ...state, user: action.payload };
    case 'auth/clearUser':
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFormData: (state, action) => customReducer(state, { ...action, type: 'auth/setFormData' }),
    toggleCreateAccountModal: (state) => customReducer(state, { type: 'auth/toggleCreateAccountModal' }),
    toggleSignInModal: (state) => customReducer(state, { type: 'auth/toggleSignInModal' }),
    setAuthenticated: (state, action) => customReducer(state, { ...action, type: 'auth/setAuthenticated' }),
    setUser: (state, action) => customReducer(state, { ...action, type: 'auth/setUser' }),
    clearUser: (state) => customReducer(state, { type: 'auth/clearUser' }),
  },
});

export const { setFormData, toggleCreateAccountModal, toggleSignInModal, setAuthenticated, setUser, clearUser } = authSlice.actions;
export default authSlice.reducer; 