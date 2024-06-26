import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./features/numberSlice";
import usersReducer from "./features/userSlice";
import authReducer from "./features/authSlice";
import { apiSlice } from "./features/api/apiSlice";
import { apiHouseSlice } from "./features/api/apiHouseSlice";
import { apiColombiaSlice } from "./features/api/apiColombiaSlice";
import { apiMessageSlice } from "./features/api/apiMessageSlice";

/** Agrupamos los estados en una sola ubicacion */

const store = configureStore({
  reducer: {
    number: numberReducer,
    users: usersReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [apiHouseSlice.reducerPath]: apiHouseSlice.reducer,
    [apiColombiaSlice.reducerPath]: apiColombiaSlice.reducer,
    [apiMessageSlice.reducerPath]: apiMessageSlice.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(apiHouseSlice.middleware)
      .concat(apiColombiaSlice.middleware)
      .concat(apiMessageSlice.middleware),
});

export default store;
