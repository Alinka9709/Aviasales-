import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AviasalesTiketProps } from "../components/interfaces/AviasalesTiketProps";

interface Сheckbox {
  tikets: AviasalesTiketProps[];
  status: boolean;
  error: boolean;
  pluseFive: number;
  sort: string;
  allchek: boolean;
  steps: { [k: string]: boolean };
}
const initialState: Сheckbox = {
  steps: { without: true, one: true, two: true, three: true },
  allchek: true,
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
    selectAll: (state) => {
      const changedSteps = Object.keys(state.steps).reduce(
        (acc: { [k: string]: boolean }, curr) => {
          acc[curr] = !state.allchek;
          return acc;
        },
        {},
      );
      state.allchek = !state.allchek;
      state.steps = changedSteps;
    },
    selectId: (state, action: PayloadAction<string>) => {
      const changedSteps = Object.keys(state.steps).reduce(
        (acc: { [k: string]: boolean }, curr) => {
          if (curr === action.payload) {
            acc[curr] = !state.steps[action.payload];
          } else {
            acc[curr] = state.steps[curr];
          }
          return acc;
        },
        {},
      );

      const boleanCheck = Object.values(changedSteps).every((item) => {
        return item === true;
      });
      state.steps[action.payload] = !state.steps[action.payload];
      state.allchek = boleanCheck;
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
