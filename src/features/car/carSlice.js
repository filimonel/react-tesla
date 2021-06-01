import { createSlice } from "@reduxjs/toolkit";

// You can imagine redux as a whole state of data that you have.
// Slice is just one small estate of that state.
// Car data will be shared globally, all component will have access.

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
