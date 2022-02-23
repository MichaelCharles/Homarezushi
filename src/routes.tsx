import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

export const Path = {
    root: "/",
    en: "/:lang",
    ja: "/:lang",
};

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:lang" element={<Home />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
