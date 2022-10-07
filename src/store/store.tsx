import { configureStore } from "@reduxjs/toolkit";

import getTiketsReducer from "./getTiketsReducer";

export const store = configureStore({
  reducer: {
    tikets: getTiketsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
