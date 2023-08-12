import { configureStore } from "@reduxjs/toolkit";

import contentReducer from "./services/content/contentSlice";

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});
