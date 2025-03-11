import "./style.css";
import { createHomePage } from "./homepage";
import { createMenuPage } from "./menu";
import { createAboutPage } from "./about";

const content = document.querySelector("div#content");
const tabButtonHome = document.querySelector("nav > button:nth-child(1)");
tabButtonHome.addEventListener("click", (event) => {
    event.preventDefault();
    createHomePage();
});
const tabButtonMenu = document.querySelector("nav > button:nth-child(2)");
tabButtonMenu.addEventListener("click", (event) => {
    event.preventDefault();
    createMenuPage();
});
const tabButtonAbout = document.querySelector("nav > button:nth-child(3)");
tabButtonAbout.addEventListener("click", (event) => {
    event.preventDefault();
    createAboutPage();
});

createHomePage();
