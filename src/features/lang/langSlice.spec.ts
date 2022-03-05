
import library from "../../library";
import langReducer, { LangState, setLang } from "./langSlice";

describe("lang reducer", () => {
    const initialState: LangState = {
        lang: library.getCookie("lang") === "en" ? "en" : "ja",
    };
    it("should handle initial state", () => {
        expect(langReducer(undefined, { type: "unknown" })).toEqual({
            lang: library.getCookie("lang") === "en" ? "en" : "ja",
        });
    });

    it("should handle setLang", () => {
        const actual = langReducer(initialState, setLang("ja"));
        expect(actual.lang).toEqual("ja");
    });
});
