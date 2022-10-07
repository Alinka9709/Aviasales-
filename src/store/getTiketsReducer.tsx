import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AviasalesTiketProps } from "../components/interfaces/AviasalesTiketProps";

export const fetchTiketById = createAsyncThunk(
  "tikets/fetchTiketById",
  async function () {
    const response = await fetch(
      "https://aviasales-test-api.kata.academy/search",
    );
    const data = await response.json();
    localStorage.setItem("token", data.searchId);
  },
);

export const fetchTikets = () => {
  const ls = localStorage.getItem("token");

  return async (dispatch: any) => {
    for (let i = 0; i < 50; i += 1) {
      try {
        const response = await axios.get(
          `https://aviasales-test-api.kata.academy/tickets?searchId=${ls}`,
        );

        if (response.status === 500) {
          throw new Error("Server Error!");
        }
        if (response.data.stop === true) {
          dispatch(stopLoading());
          break;
        }

        dispatch(setLoading());

        dispatch(addTiket(response.data));
      } catch (e) {
        console.log(e);
      }
    }
  };
};

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
