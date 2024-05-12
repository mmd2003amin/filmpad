import { createSlice } from "@reduxjs/toolkit";
// import { useQuery } from "@apollo/client";
// import { GET_FILMS } from "../../graphql/queries";

// const getData = ("products/getData" , () => {
//   const { data } = useQuery(GET_FILMS);
//   return data;
// })

const productsSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  
  reducers: {
    allMovies: (state, action) => {
      state.products = action.payload;
    },
  
  },
});

export default productsSlice.reducer;
export const { allMovies } = productsSlice.actions;
