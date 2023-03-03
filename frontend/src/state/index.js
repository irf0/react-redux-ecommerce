import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //1.SET CART ITEMS
    setItems: (state, action) => {
      state.items = action.payload;
    },
    //2.ADD TO CART
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.item.id
      );
      if (itemIndex !== -1) {
        state.cart[itemIndex].count += action.payload.item.count;
      } else {
        state.cart = [...state.cart, action.payload.item];
      }
    },
    //3.REMOVE FROM CART
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    //4.INCREASE COUNT
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    //5.DECREASE COUNT
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count--;
        }
        return item;
      });
    },

    //6.CLEAR CART
    clearCart: (state) => {
      state.cart = [];
    },
    //7.TOGGLE CART
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  clearCart,
  setIsCartOpen,
} = cartSlice.actions;
export default cartSlice.reducer;
