// Make an array with each image to be included in the slideshow
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
//How long an image should be displayed, each 1000 is 1 second
var imgDuration = 3000;

function slideShow() {
    /*The IMG taken with the id image1 will be equal to the object in 
        the imgArray that has the position that curIndex specifies*/
    document.getElementById('image1').src = imgArray[curIndex];
    curIndex++;
    /*If curIndex becomes as long as the amount of objects in imgArray, 
    curIndex restarts from the beginning so that the slide show restarts*/

    if (curIndex == imgArray.length) { curIndex = 0; }
    //Restarts the function after a certain time that is in imgDuration and causes a new image to appear

    setTimeout("slideShow()", imgDuration);
}
//starts the slideshow
slideShow();