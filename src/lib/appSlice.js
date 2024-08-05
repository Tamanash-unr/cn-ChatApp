import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loading: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const { updateUser } = appSlice.actions

export default appSlice.reducer