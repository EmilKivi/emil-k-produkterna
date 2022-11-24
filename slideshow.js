// Gör en array med varje bild som ska inkluderas i bildspelet
var imgArray = [
    './image/Racing-Glove.png',
    './image/Racing-suit.png',
    './image/Racing-Glove3.png',
    './image/Racing_helmet1.png',
    './image/Racing-Glove2.png',
    './image/racing-helmet2.png',
    './image/Racing-Suit2.png',
    './image/Racing-suit3.png',
    './image/racing-helmet3.png',

];
var curIndex = 0;

//Hur länge en bild ska visas, varje 1000 är 1 sekund
var imgDuration = 3000;

function slideShow() {

/*IMG:n som tas med id image1 kommer att vara lika med objektet i
        imgArrayen som har positionen som curIndex specificerar*/
    document.getElementById('image1').src = imgArray[curIndex];
    curIndex++;

/*Om curIndex blir lika lång som antalet objekt i imgArray,
    curIndex startar om från början så att bildspelet startar om*/

    if (curIndex == imgArray.length) { curIndex = 0; }
//Startar om funktionen efter en viss tid som är i imgDuration och gör att en ny bild visas

    setTimeout("slideShow()", imgDuration);
}
//starts the slideshow
slideShow();