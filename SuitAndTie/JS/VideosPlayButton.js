function $(q) {return document.querySelector(q);} //Sets the $ function as "document.querySelector()"

$("#triangleButton1").addEventListener("click", playVideo1); //Listens for a click on the play button and triggers the animation
$("#triangleButton2").addEventListener("click", playVideo2); //Listens for a click on the play button and triggers the animation

function playVideo1() {
    $("#triangleButton1").style.animation = "videoPre ease-in 0.6s";
    $("#heroImage1").style.animation = "videoPre ease-in 0.6s";
    $("#video1").style.animationPlayState = "running";
    setTimeout(function removeDisplay () {
        $("#heroImage1").style.cssText = "background:none; opacity:1;";
        $("#triangleButton1").style.cssText = "display:none; transform:translateX(-5000px);";
        $("#video1").src = "https://www.youtube.com/embed/Dfu3jwiQ7hk?version=3&modestbranding&autoplay=1";
    }, 1000);
}

function playVideo2() {
    $("#triangleButton2").style.animation = "videoPre ease-in 0.6s";
    $("#heroImage2").style.animation = "videoPre ease-in 0.6s";
    $("#video2").style.animationPlayState = "running";
    setTimeout(function removeDisplay () {
        $("#heroImage2").style.cssText = "background:none; opacity:1;";
        $("#triangleButton2").style.cssText = "display:none; transform:translateX(-5000px);";
        $("#video2").src = "https://www.youtube.com/embed/l-UP6s4bZMY?version=3&modestbranding&autoplay=1";
    }, 1000);
}