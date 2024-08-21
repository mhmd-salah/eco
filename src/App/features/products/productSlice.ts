import { Iproducts } from "./../../../Types/index";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { api } from "../../../Api";


interface productsState {
  loading:boolean,
  productsList : Iproducts[]
  error:null|unknown;
}
const initialState: productsState = {
  loading:true,
  productsList: [],
  error:null
};

export const getProductsList = createAsyncThunk("products/getProductsList",async(_,{rejectWithValue})=>{
  //Get M
  try{
    const {data}=await api.get<Iproducts[]>("products")
    return data;
  }catch(error:unknown){
    return rejectWithValue(error)
  }
})

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(getProductsList.pending, (state)=>{
      state.loading=true;
    })
    .addCase(getProductsList.fulfilled, (state,action)=>{
      state.loading = false;
      state.productsList = action.payload
    })
    .addCase(getProductsList.rejected.toString(), (state,action:PayloadAction)=>{
      state.loading = false;
      state.error = action.payload
      
    })
  },
});

export const productsReducer = productsSlice.reducer;
export const productsSelector= (({products}:RootState)=>products) 
