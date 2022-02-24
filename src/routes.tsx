import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ReactBurgerMenu from "react-burger-menu";

import "./routes.css";
const Menu = ReactBurgerMenu.slide;

export const Path = {
    root: "/",
    en: "/:lang",
    ja: "/:lang",
};

const AppRoutes = () => (
    <BrowserRouter>
        <Menu>
            <a className="hb-menu-item" id="home" href="/">
                Home
            </a>
            <a className="hb-menu-item" href="/about">
                About
            </a>
            <a className="hb-menu-item" href="/contact">
                Contact
            </a>
        </Menu>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:lang" element={<Home />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
