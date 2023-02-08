import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { contactApi } from "../services/ContactService";
import userReducer from "./reducers/UserSlice";
const rootReducer = combineReducers({
  userReducer,
  [contactApi.reducerPath]: contactApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (curryGetDefaultMiddleware) =>
      curryGetDefaultMiddleware().concat(contactApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
