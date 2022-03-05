import { useDispatch, useSelector } from "react-redux";
import { selectLang, setLang } from "../../../features/lang/langSlice";
import styled from "styled-components";

const LangButton = styled.button`
    background: rgba(0, 0, 0, 0);
    border: 0px;
    outline: 0px;
    cursor: pointer;
    color: #f2f2f2;
`;

const LanguageSwitcher = () => {
    const lang = useSelector(selectLang);
    const dispatch = useDispatch();

    return (
        <LangButton
            onClick={() => {
                window.history.replaceState(
                    null,
                    "",
                    lang === "ja" ? "/en" : "/ja"
                );
                dispatch(setLang(lang === "ja" ? "en" : "ja"));
            }}
        >
            {lang === "ja" ? "English" : "日本語"}
        </LangButton>
    );
};

export default LanguageSwitcher;
