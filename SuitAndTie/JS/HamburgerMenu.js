function $(q) {return document.querySelector(q);} //Sets the $ function as "document.querySelector()"

//Event Listeners:
$("#hamburgerButton").addEventListener("click", hamburgerDisappear); //Listens for a click on the hamburger button and triggers the diappear function
$("#burgerX em").addEventListener("click", menuDisappear); //Listens for a click on the hamburger button and triggers the diappear function
window.addEventListener('resize', hamburgerReappear); //Listens for window resizing and triggers the reappear function
document.addEventListener('DOMContentLoaded', hamburgerReappear); //Makes the hamburger button appear when the window loads

//Functions:
function hamburgerDisappear() { // Makes the hamburger button disappear and displays the menu
    $("#hamburgerButton").style.transform = "translateX(200px)"; //Moves the hamburger button to the right offscreen
    $("#burgerMenu").style.cssText = "transform:translateX(56px);display:inline-block;" //Moves the menu left onscreen
}
function menuDisappear() { // Makes the hamburger button appear and turns off the menu
    document.querySelector("#hamburgerButton").style.cssText = "transform:translateX(0px); display:inline-block;" //Displays hamburger button
    document.querySelector("#burgerMenu").style.transform = "translateX(500px)"; //Moves burger menu away
}
function hamburgerReappear() { //Switches on or off the hamburger menu depending on window width
    if (window.innerWidth >= 1121) { //Tests the inner window width against the pixel value where the hamburger button appears
    $("#hamburgerButton").style.cssText = "transorm:translateX(0px);display:none;" //Moves the hamburger button back
    $("#burgerMenu").style.cssText = "transform:translateX(350px);display:none;" //Moves the menu away and makes it disappear
    }
    if (window.innerWidth < 1121) { //Tests the inner window width against the pixel value where the hamburger button appears
        $("#hamburgerButton").style.display = "inline-block";
        $("#burgerMenu").style.display = "inline-block";
    }
}

/* "PERFECT CODE"
function $(q) {return document.querySelector(q);}
function hamburgerDisappear() {
    $("#hamburgerButton").style.transform = "translateX(200px)";
    $("#burgerMenu").style.cssText = "transform:translateX(56px); display:inline-block;";
}
function menuDisappear() {
    document.querySelector("#hamburgerButton").style.cssText = "transform:translateX(0px); display:inline-block;";
    document.querySelector("#burgerMenu").style.transform = "translateX(500px)";
}
function hamburgerReappear() {
    if (window.innerWidth >= 1121) {
    $("#hamburgerButton").style.cssText = "transorm:translateX(0px);display:none;";
    $("#burgerMenu").style.cssText = "transform:translateX(350px);display:none;";
    }
    if (window.innerWidth < 1121) {
        $("#hamburgerButton").style.display = "inline-block";
        $("#burgerMenu").style.display = "inline-block";
    }
}
$("#hamburgerButton").addEventListener("click", hamburgerDisappear);
$("#burgerX em").addEventListener("click", menuDisappear);
window.addEventListener("resize", hamburgerReappear);
document.addEventListener("DOMContentLoaded", hamburgerReappear);