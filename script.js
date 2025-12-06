// /**
//  * THEME MODE
//  */
const htmlElement = document.querySelector(':root');
const themeMode = window.matchMedia('(prefers-color-scheme: dark)');

if (themeMode.matches) {
    htmlElement.classList.add("dark-mode");
}

function themeModeChange() {
    const wasDarkmode = localStorage.getItem("darkmode") === "true";
    localStorage.setItem("darkmode", !wasDarkmode);
    htmlElement.classList.toggle("dark-mode", !wasDarkmode);
}

function onload() {
    htmlElement.classList.toggle("dark-mode", localStorage.getItem("darkmode") === 'true');
}

/**
 * MOBILE NAVBAR
 * navbar will show after clicking menu button
 */

const navToggler = document.getElementById("menu-sandwich");
const navbar = document.getElementById("navbar-drop");


const toggleNav = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNav);