import hamburguerMenu from "./menu-hamburguesa.js";
import initList from "./activ1.js";
import saveTextBox from "./activ2.js";
import calculateSquares from "./activ3.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    saveTextBox();
    calculateSquares();
});

window.onload = initList();
