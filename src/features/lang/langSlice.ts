import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import library from "../../library";

export interface LangState {
    lang: "ja" | "en";
}

const initialState: LangState = {
    lang: library.getCookie("lang") === "en" ? "en" : "ja",
};

export const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        setLang: (state, action: PayloadAction<string>) => {
            state.lang = action.payload === "ja" ? "ja" : "en";
        },
    },
});

export const { setLang } = langSlice.actions;

export const selectLang = (state: RootState) => state.lang.lang;

export default langSlice.reducer;
