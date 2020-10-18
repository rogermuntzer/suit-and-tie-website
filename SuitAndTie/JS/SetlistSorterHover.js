function $(q) {return document.querySelector(q);} //Sets the $ function as "document.querySelector()"

//Button Click Shading:
$("#sortBySong").addEventListener("click", shaderS); //These listen for clicking the buttons
$("#sortByArtist").addEventListener("click", shaderA);
$("#sortByYearSong").addEventListener("click", shaderYS);
$("#sortByYearArtist").addEventListener("click", shaderYA);

function shaderS () { //These deal with shading
    $("#sortByArtist").style.color = "white";
    $("#sortByYearSong").style.color = "white";
    $("#sortByYearArtist").style.color = "white";
    $("#sortBySong").style.color = "#9E9E9E";
    $("#setlistContent").style.animationPlayState = "running" //This starts the animation
    window.scroll({top: 590, behavior: "smooth"}); //Scrolls to the top left of the page "smoothly"
}
function shaderA () {
    $("#sortBySong").style.color = "white";
    $("#sortByYearSong").style.color = "white";
    $("#sortByYearArtist").style.color = "white";
    $("#sortByArtist").style.color = "#9E9E9E";
    $("#setlistContent").style.animationPlayState = "running"
    window.scroll({top: 590, behavior: "smooth"});
}
function shaderYS () {
    $("#sortBySong").style.color = "white";
    $("#sortByArtist").style.color = "white";
    $("#sortByYearArtist").style.color = "white";
    $("#sortByYearSong").style.color = "#9E9E9E";
    $("#setlistContent").style.animationPlayState = "running"
    window.scroll({top: 590, behavior: "smooth"});
}
function shaderYA () {
    $("#sortBySong").style.color = "white";
    $("#sortByArtist").style.color = "white";
    $("#sortByYearSong").style.color = "white";
    $("#sortByYearArtist").style.color = "#9E9E9E";
    $("#setlistContent").style.animationPlayState = "running"
    window.scroll({top: 590, behavior: "smooth"});
}

//Restarts animation on each iteration:
$("#setlistContent").addEventListener("animationiteration", restartS);
function restartS() { $("#setlistContent").style.animationPlayState = "paused" }

//Functions for the "top" button:
$("#topButton").addEventListener("click", scrollTop);
function scrollTop() { //When the "top" button is clicked, the page scrolls up
    window.scroll({top: 590, behavior: "smooth"});
    $("#sortBySong").style.color = "white";
    $("#sortByArtist").style.color = "white";
    $("#sortByYearSong").style.color = "white";
    $("#sortByYearArtist").style.color = "white";
}; 