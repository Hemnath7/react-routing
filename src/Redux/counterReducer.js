import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  //Obj as Argument
  name: "counter", //reducer name - predefined
  initialState: {
    //default values - predefined
    value: 0,
    // data: [],
  },
  //
  reducers: {
    //can/will create/define multiple functions inside this block. fn names are user defined only

    increment: (state) => {
      //state - ud only
      state.value += 1;
    },
    decrement: (state) => {
      //state - ud only
      state.value -= 1;
    },
    incrementByAmount: (state, amount) => {
      state.value += amount.payload;
    },
    clear: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, clear } =
  counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;
