import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { defaultLang, supportedLangs } from "../../config/contentConfig";
import { langUrl } from "../../config/contentConfig";

const initialState = {
  lang: defaultLang,
  supportedLangs: { ...supportedLangs },
  translations: {},
};

function fetchTranslations(lang) {
  return new Promise((resolve) => {
    setTimeout(function () {
      fetch(
        (window.location.origin + langUrl)
          .replace("/Projet_12/Projet_12/", "/Projet_12/")
          .replace("{lang}", lang)
      )
        .then((response) => response.json())
        .then((data) => resolve(data));
    }, 1000);
  });
}

export const setLangAsync = createAsyncThunk(
  "content/setLangAsync",
  async (lang, { getState, dispatch }) => {
    const resolvedLang = lang || getState().content.lang;
    const translations = await fetchTranslations(resolvedLang);
    dispatch(contentSlice.actions.setLang(resolvedLang));
    return translations;
  }
);

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setLangAsync.pending, (state) => {
      console.log("loaddddd");
      state.status = "loading";
    });
    builder.addCase(setLangAsync.fulfilled, (state, action) => {
      console.log("finnn");
      console.log(action.payload);
      state.translations = action.payload;
      state.status = "idle";
    });
    builder.addCase(setLangAsync.rejected, (state, action) => {
      console.log("error");
      state.translations = action.payload;
      state.status = "error";
    });
  },
});

export const { setLang } = contentSlice.actions;

export default contentSlice.reducer;
