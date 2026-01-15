let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        logo.src = "images/byui-logo-white.png"
        document.getElementById("content").style.backgroundColor = "darkgray";
        document.querySelectorAll("h1").forEach(h1 => {h1.style.color = "white"});
        document.querySelectorAll("p").forEach(p => {p.style.color = "white"});
        document.querySelectorAll("li").forEach(li => {li.style.color = "white"});
        document.getElementById("school").style.color = "blue";
        document.querySelector("html").style.backgroundColor = "darkgray";
        document.getElementById("content").style.outline = "white solid .5px";

    } else {
        // code for changes to colors and logo
        logo.src = "images/byui-logo-blue.webp"
        document.getElementById("content").style.backgroundColor = "white";
        document.querySelectorAll("h1").forEach(h1 => {h1.style.color = "black"});
        document.querySelectorAll("p").forEach(p => {p.style.color = "black"});
        document.querySelectorAll("li").forEach(li => {li.style.color = "black"});
        document.getElementById("school").style.color = "blue";
        document.querySelector("html").style.backgroundColor = "white";
        document.getElementById("content").style.outline = "grey solid .5px";

    }
}