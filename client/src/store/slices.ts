import { Blogs } from '../interfaces';
import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
    blogs: Blogs[],
}

const initialState: InitialState = {
   blogs : [],
};

const slice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setBlogs:(state,action)=>{
            state.blogs=action.payload
        }
    },
});

export const { setBlogs } = slice.actions;
export default slice.reducer;