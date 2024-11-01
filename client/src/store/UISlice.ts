import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navOpen: false,
    sideNavOpen: false,
    alert: {
        message: '',
        type: 'success',
    },
}

const UISlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setNavOpen: (state, action) => {
            state.navOpen = action.payload
        },
        setSideNavOpen: (state, action) => {
            state.sideNavOpen = action.payload
        },
        setAlert: (state, action) => {
            state.alert.message = action.payload.message;
            state.alert.type = action.payload.type;
        },
    }
})

export const { setNavOpen,setSideNavOpen,setAlert } = UISlice.actions;

export default UISlice.reducer;