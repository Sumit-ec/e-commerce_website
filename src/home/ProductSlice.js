// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchProducts = () => async (dispatch) => {
//   dispatch(fetchProductsStart());
//   try {
//     const response = await axios.get('https://fakestoreapi.com/products');
//     dispatch(fetchProductsSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchProductsFailure(error.message));
//   }
// };
// const productsSlice = createSlice({
//   name: 'products',
//   initialState: {
//     items: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     fetchProductsStart(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchProductsSuccess(state, action) {
//       state.loading = false;
//       state.items = action.payload;
//     },
//     fetchProductsFailure(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   fetchProductsStart,
//   fetchProductsSuccess,
//   fetchProductsFailure,
// } = productsSlice.actions;

// export default productsSlice.reducer;
