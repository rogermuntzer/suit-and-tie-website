function $(q) {return document.querySelector(q);} //Sets the $ function as "document.querySelector()"

var scrollDelay = 0; //Sets a delay for the "if" statement below, allowing the "RefreshScrollToTop" time to work
setTimeout(function(){scrollDelay++; }, 2000); //"setTimeout" and "2000" trigger the function once after 2 seconds. "scrollDelay ++" adds 1 to the variable

window.onscroll = function() { //Activates the function whenever the window is scrolled
    if (((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) && (scrollDelay>0)) {
        /* "innerHeight" is window height, "pageYOffset" is how far the page has scrolled, "offsetHeight" is the size of the entire page.
        If the above conditions are met and the "scrollDelay" is above 0 (after 2 seconds), the function is triggered */
        $("#socials1").style.animationPlayState = "running"; //adds the "running" animation state to each footer id
        $("#socials2").style.animationPlayState = "running";
        $("#socials3").style.animationPlayState = "running";
        $("#socials4").style.animationPlayState = "running";
        $("#socials5").style.animationPlayState = "running";
        $("#contactInfo").style.animationPlayState = "running";
        $("#copyright").style.animationPlayState = "running";
    }
}