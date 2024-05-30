import { getRouteAddNewAnalysis, getRouteMain } from "src/shared/const/router";

import MainIcon from "src/shared/assets/icons/main-20-20.svg";
import AboutIcon from "src/shared/assets/icons/about-20-20.svg";
import { NavbarItemType } from "../types/Navbar";

export const navBarItemsList: NavbarItemType[] = [
  {
    path: getRouteMain(),
    Icon: MainIcon,
    text: "Главная",
  },
  {
    path: getRouteAddNewAnalysis(),
    Icon: AboutIcon,
    text: "Новый анализ",
  },
];
