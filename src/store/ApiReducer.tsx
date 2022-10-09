/* eslint-disable no-await-in-loop */
/* eslint-disable @typescript-eslint/no-use-before-define */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTiket, stopLoading, setLoading } from "./getTiketsReducer";

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
