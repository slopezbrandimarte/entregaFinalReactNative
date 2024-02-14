import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value:{
        products: [],
        categories:[],
        productSelected:{},
        productsFilteredByCategory:[]
    }
  }

  export const shopSlice = createSlice({
    name:"shop",
    initialState,
    reducers:{
        setProductsFilteredByCategory: (state,action) => {
            state.value.productsFilteredByCategory = state.value.products.filter(product => product.category == action.payload)
        },
        setProductSelected: (state,action) =>{
            state.value.productSelected = state.value.products.find(product => product.id ===action.payload)
        },
        setProducts:(state,action) =>{
            state.value.products = action.payload
        },
        setCategories:(state,action) =>{
            state.value.categories = action.payload
        }
    }
  })

  export const { setProductsFilteredByCategory, setProductSelected, setProducts, setCategories} = shopSlice.actions

  export default shopSlice.reducer