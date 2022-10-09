import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AviasalesTiketProps } from "../components/interfaces/AviasalesTiketProps";

interface Сheckbox {
  all: boolean;
  without: boolean;
  one: boolean;
  two: boolean;
  three: boolean;
  tikets: AviasalesTiketProps[];
  status: boolean;
  error: boolean;
  pluseFive: number;
  sort: string;
}
const initialState: Сheckbox = {
  all: true,
  without: true,
  one: true,
  two: true,
  three: true,
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
    selectId: (state, action: PayloadAction<string>) => {
      // @ts-ignore

      state[action.payload] = !state[action.payload];

      if (action.payload === "all" && state.all) {
        state.without = true;

        state.one = true;

        state.two = true;

        state.three = true;
      }

      if (action.payload === "all" && !state.all) {
        state.without = false;

        state.one = false;

        state.two = false;

        state.three = false;
      }
      if (!state.without || !state.one || !state.two || !state.three) {
        state.all = false;
      }
      if (state.without && state.one && state.two && state.three) {
        state.all = true;
      }
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
} = aviasalesSlice.actions;

export default aviasalesSlice.reducer;
