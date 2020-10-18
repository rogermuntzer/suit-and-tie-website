function $(q) {return document.querySelector(q);} //Sets the $ function as "document.querySelector()"

//Song lists (Song then artist in that order, it will be organised later, make sure special characters work)
//Noughties to present songs:
var noughties = ["always like this", "bombay bicycle club", "american boy", "estelle", "are you gonna be my girl", "jet", "bad romance", "lady gaga", "beggin&#39;", "madcon", "i bet you look good on the dancefloor", "arctic monkeys", "buck rogers", "feeder", "can&#39t stop the feeling!", "justin timberlake", "chelsea dagger", "the fratellis", "chasing cars", "snow patrol", "complicated", "avril lavigne", "crazy", "gnarles barkley", "dakota", "stereophonics", "dynamite", "taio cruz", "everlong", "foo fighters", "filthy/gorgeous", "scissor sisters", "forget you", "cee lo green", "get lucky", "daft punk", "gotta get thru this", "daniel bedingfield", "happy", "pharrell williams", "havana", "camila cabello", "hey ya", "outkast", "ho hey", "the lumineers", "i predict a riot", "kaiser chiefs", "i will wait", "mumford & sons", "just you and i", "tom walker", "lady (hear me tonight)", "modjo", "last nite", "the strokes", "locked out of heaven", "bruno mars", "moves like jagger", "maroon 5", "mr. brightside", "the killers", "murder on the dancefloor", "sophie ellis-bextor", "my hero", "foo fighters", "say my name", "destiny&#39;s child", "seven nation army", "the white stripes", "sex on fire", "kings of leon", "shake it off", "taylor swift", "somebody told me", "the killers", "suit and tie", "justin timberlake", "teenage dirtbag", "wheatus", "thinking out loud", "ed sheeran", "uptown funk", "mark ronson", "use somebody", "kings of leon", "valerie", "amy winehouse", "we found love", "rihanna", "young love", "mystery jets", "1 thing", "amerie", "5 colours in her hair", "mcfly", "24k magic", "bruno mars"];

//Eighties and Nineties songs:
var eighties = ["africa", "toto", "ain&#39t nobody", "chaka kahn", "all i do", "stevie wonder", "all star", "smash mouth", "all the small things", "blink&#45;182", "dancing in the moonlight", "toploader", "don&#39t look back in anger", "oasis", "don&#39t stop believin&#39", "journey", "faith", "george michael", "i feel for you", "chaka kahn", "let&#39s dance", "david bowie", "man in the mirror", "michael jackson", "more than a feeling", "boston", "parklife", "blur", "place your hands", "reef", "the riverboat song", "ocean colour scene", "she&#39s electric", "oasis", "smells like teen spirit", "nirvana", "song 2", "blur", "summer of 69", "bryan adams", "take on me", "a&#45ha", "under pressure", "david bowie", "weather with you", "crowded house", "wonderwall", "oasis", "word up", "cameo", "you and me song", "the wannadies"];

//Sixties and Seventies songs:
var sixties = ["ain&#45t no mountain high enough", "marvin gaye &#38 tammi terrell", "all day and all of the night", "the kinks", "blame it on the boogie", "the jackson 5", "brown eyed girl", "van morrison", "can&#38t take my eyes off you", "frankie valli", "crazy little thing called love", "queen", "don&#38t stop me now", "queen", "don&#38t stop &#38til you get enough", "michael jackson", "dreams", "fleetwood mac", "express yourself", "charles wright", "i got you (i feel good)", "james brown", "i&#38m a believer", "the monkees", "isn&#38t she lovely", "stevie wonder", "lovely day", "bill withers", "satisfaction", "the rolling stones", "saw her standing there", "the beatles", "superstition", "stevie wonder", "sweet home alabama", "lynyrd skynyrd", "three little birds", "bob marley", "twist and shout", "the beatles", "voulez&#45vous", "abba", "you really got me", "the kinks", "20th century boy", "t&#46rex"]

//00s to Present Organiser:
var songs00s = [];
var artists00s = [];

for (let i=0; i < noughties.length; i++) { //Splits the list into songs and artists.
    if(i%2==0){
        songs00s.push(noughties[i]);
    } else {
        artists00s.push(noughties[i]);
    }
}

var songsThenArtists00s = []; //Split lists
var artistsThenSongs00s = [];

for (let i=0; i < songs00s.length; i++) { //This creates formatted arrays for sorting
    let x = songs00s[i];
    let y = artists00s[i];
    songsThenArtists00s.push(x + " | " + "<b>" + y + "</b>");
    artistsThenSongs00s.push("<b>" + y + "</b> | " + x);
}

songsThenArtists00s.sort(); //These store the sorted lists
artistsThenSongs00s.sort();

//80s to 90s Organiser:
var songs80s = [];
var artists80s = [];

for (let i=0; i < eighties.length; i++) { //This splits the list into songs and artists.
    if(i%2==0){
        songs80s.push(eighties[i]);
    } else {
        artists80s.push(eighties[i]);
    }
}

var songsThenArtists80s = []; //Split lists
var artistsThenSongs80s = [];

for (let i=0; i < songs80s.length; i++) { //This creates formatted arrays for sorting
    let x = songs80s[i];
    let y = artists80s[i];
    songsThenArtists80s.push(x + " | " + "<b>" + y + "</b>");
    artistsThenSongs80s.push("<b>" + y + "</b> | " + x);
}

songsThenArtists80s.sort(); //These store the sorted lists
artistsThenSongs80s.sort();

//60s to 70s Organiser:
var songs60s = [];
var artists60s = [];

for (let i=0; i < sixties.length; i++) { //This splits the list into songs and artists.
    if(i%2==0){
        songs60s.push(sixties[i]);
    } else {
        artists60s.push(sixties[i]);
    }
}

var songsThenArtists60s = []; //Split Lists
var artistsThenSongs60s = [];

for (let i=0; i < songs60s.length; i++) { //This creates formatted arrays for sorting
    let x = songs60s[i];
    let y = artists60s[i];
    songsThenArtists60s.push(x + " | " + "<b>" + y + "</b>");
    artistsThenSongs60s.push("<b>" + y + "</b> | " + x);
}

songsThenArtists60s.sort(); //These store the sorted lists
artistsThenSongs60s.sort();

//Combining Section:
var allSortSong = songsThenArtists00s.concat(songsThenArtists80s, songsThenArtists60s);
var allSortArtist = artistsThenSongs00s.concat(artistsThenSongs80s, artistsThenSongs60s);
allSortSong.sort();
allSortArtist.sort();

//Interactive Section:
$("#sortBySong").addEventListener("click", function(){setTimeout(sortSong, 450)}); //These listen for clicking the buttons
$("#sortByArtist").addEventListener("click", function(){setTimeout(sortArtist, 450)});
$("#sortByYearSong").addEventListener("click", function(){setTimeout(sortYearSong, 450)});
$("#sortByYearArtist").addEventListener("click", function(){setTimeout(sortYearArtist, 450)});
document.addEventListener('DOMContentLoaded', sortYearSong); //This initialises on Sort by Year / Song Title

function sortSong () { //This clears the HTML content and adds the list
    $("#setlistContent").innerHTML = "";
    for(var i=0; i < allSortSong.length; i++) {
        $("#setlistContent").innerHTML += allSortSong[i] + "<br>";
    }
    $("#setlistButtons").innerHTML + "<br>"
}
function sortArtist () { //This clears the HTML content and adds the list
    $("#setlistContent").innerHTML = "";
    for(var i=0; i < allSortArtist.length; i++) {
        $("#setlistContent").innerHTML += allSortArtist[i] + " <br>";
    }
    $("#setlistButtons").innerHTML + "<br>"
}

function sortYearSong () { //This clears the HTML content and adds the lists
    $("#setlistContent").innerHTML = "" + "<em>00s to present<em><br><br>";
    for(var i=0; i < songsThenArtists00s.length; i++) {
        $("#setlistContent").innerHTML += songsThenArtists00s[i] + "<br>";
    }
    $("#setlistContent").innerHTML += '<div id="hrMargin"><hr/></div><em>80s & 90s<em><br><br>';
    for(var i=0; i < songsThenArtists80s.length; i++) {
        $("#setlistContent").innerHTML += songsThenArtists80s[i] + "<br>";
    }
    $("#setlistContent").innerHTML += '<div id="hrMargin"><hr/></div><em>60s & 70s<em><br><br>';
    for(var i=0; i < songsThenArtists60s.length; i++) {
        $("#setlistContent").innerHTML += songsThenArtists60s[i] + "<br>";
    }
    $("#setlistButtons").innerHTML + "<br>"
}

function sortYearArtist () { //This clears the HTML content and adds the lists
    $("#setlistContent").innerHTML = "" + "<em>00s to present<em><br><br>";
    for(var i=0; i < artistsThenSongs00s.length; i++) {
        $("#setlistContent").innerHTML += artistsThenSongs00s[i] + "<br>";
    }
    $("#setlistContent").innerHTML += '<div id="hrMargin"><hr/></div><em>80s & 90s<em><br><br>';
    for(var i=0; i < artistsThenSongs80s.length; i++) {
        document.querySelector("#setlistContent").innerHTML += artistsThenSongs80s[i] + "<br>";
    }
    $("#setlistContent").innerHTML += '<div id="hrMargin"><hr/></div><em>60s and 70s<em><br><br>';
    for(var i=0; i < artistsThenSongs60s.length; i++) {
        $("#setlistContent").innerHTML += artistsThenSongs60s[i] + "<br>";
    }
    $("#setlistButtons").innerHTML + "<br>"
}