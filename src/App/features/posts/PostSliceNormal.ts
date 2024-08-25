import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export  interface Istate{
  posts:string[]
} 

const initialState:Istate = {
  posts:[]
}

export const postSlice = createSlice({
  name:"posts",
  initialState,
  reducers:{
    addPost:(state,action:PayloadAction<string>)=>{
      state.posts.push(action.payload)
    }
  }

})

export const postesReducer = postSlice.reducer;
export const {addPost} = postSlice.actions;