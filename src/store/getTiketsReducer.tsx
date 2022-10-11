import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AviasalesTiketProps } from "../components/interfaces/AviasalesTiketProps";

interface Сheckbox {
  tikets: AviasalesTiketProps[];
  status: boolean;
  error: boolean;
  pluseFive: number;
  sort: string;
  steps: { [k: string]: boolean };
}
const initialState: Сheckbox = {
  steps: { all: true, without: true, one: true, two: true, three: true },

  tikets: [],
  status: false,
  error: false,
  sort: "cheap",
  pluseFive: 5,
};
export const aviasalesSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTiket: (state, action: PayloadAction<any>) => {
      state.tikets = [...state.tikets, ...action.payload.tickets];
    },
    selectAll: (state, action: PayloadAction<any>) => {
      const changedSteps = Object.keys(state.steps).reduce((acc, curr) => {
        acc[curr] = action.payload;
        return acc;
      }, {});
      state.steps = changedSteps;
    },
    selectId: (state, action: PayloadAction<string>) => {
      state.steps[action.payload] = !state.steps[action.payload];
    },

    сhangeFilter: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    pluseFiveTiket: (state) => {
      state.pluseFive += 5;
    },
    setLoading: (state) => {
      state.status = true;
    },

    stopLoading: (state) => {
      state.status = false;
    },
  },
  extraReducers: {},
});

export const {
  selectId,
  сhangeFilter,
  pluseFiveTiket,
  addTiket,
  stopLoading,
  setLoading,
  selectAll,
} = aviasalesSlice.actions;
export default aviasalesSlice.reducer;
