import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ReactBurgerMenu from "react-burger-menu";

import "./routes.css";
import { useSelector } from "react-redux";
import { useLocalization } from "./localization";
import { selectLang } from "./features/lang/langSlice";
const Menu = ReactBurgerMenu.slide;

const MenuLink = ({
    closeSideBar,
    anchor,
    children,
}: {
    closeSideBar: Function;
    anchor: string;
    children: any;
}) => (
    <a
        className="bm-item"
        href={anchor}
        onClick={() => {
            closeSideBar();
        }}
    >
        {children}
    </a>
);

export const Path = {
    root: "/",
    en: "/:lang",
    ja: "/:lang",
};

const AppRoutes = () => {
    const [isOpen, setOpen] = useState(false);

    const handleIsOpen = () => {
        setOpen(!isOpen);
    };

    const closeSideBar = () => {
        setOpen(false);
    };

    const lang = useSelector(selectLang);
    const [l, s] = useLocalization(lang);

    return (
        <BrowserRouter>
            <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
                <MenuLink closeSideBar={closeSideBar} anchor="#hero">
                    {l.get(s.menuHero)}
                </MenuLink>
                <MenuLink closeSideBar={closeSideBar} anchor="#welcome">
                    {l.get(s.menuWelcome)}
                </MenuLink>
                <MenuLink closeSideBar={closeSideBar} anchor="#about">
                    {l.get(s.menuAbout)}
                </MenuLink>
                <MenuLink closeSideBar={closeSideBar} anchor="#photos">
                    {l.get(s.menuPhotos)}
                </MenuLink>
                <MenuLink closeSideBar={closeSideBar} anchor="#contact">
                    {l.get(s.menuContact)}
                </MenuLink>
            </Menu>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:lang" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
