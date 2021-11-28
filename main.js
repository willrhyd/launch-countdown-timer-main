

const topFlipBox = document.getElementsByClassName("countdown-element-top");
const currentCountdownNumberBottom = document.getElementsByClassName("countdown-element-number-bottom");
const currentCountdownNumberTop = document.getElementsByClassName("countdown-element-number-top-next");



let timer = new Date(14*24*60*60*1000); //length of timer countdown


//initial flip
setTimeout(function() {
    
    //minutes
    currentCountdownNumberTop[2].innerHTML = 59;
    currentCountdownNumberBottom[2].innerHTML = 59;
    topFlipBox[2].classList.toggle("countdown-element-top-flipped")
    topFlipBox[2].style.visibility="hidden"

    //hours
    currentCountdownNumberTop[1].innerHTML = 23;
    currentCountdownNumberBottom[1].innerHTML = 23;
    topFlipBox[1].classList.toggle("countdown-element-top-flipped")
    topFlipBox[1].style.visibility="hidden"

    
    //days
    currentCountdownNumberTop[0].innerHTML = 13;
    currentCountdownNumberBottom[0].innerHTML = 13;
    topFlipBox[0].classList.toggle("countdown-element-top-flipped")
    topFlipBox[0].style.visibility="hidden"

}, 1000)


//intervals for the seconds, minutes, hours, days
setInterval(function() {
    topFlipBox[3].classList.toggle("countdown-element-top-flipped")
    topFlipBox[3].style.visibility="visible"
    
    timer = new Date (timer - 1000);

    currentCountdownNumberTop[3].innerHTML = timer.getSeconds();
    currentCountdownNumberBottom[3].innerHTML = timer.getSeconds()

    setTimeout(function() {
        topFlipBox[3].classList.toggle("countdown-element-top-flipped")
        topFlipBox[3].style.visibility="hidden"
    }, 300);

 }, 1000); 

setInterval(function() {
    topFlipBox[2].classList.toggle("countdown-element-top-flipped")
    topFlipBox[2].style.visibility="visible"
    currentCountdownNumberTop[2].innerHTML = timer.getUTCMinutes();
    currentCountdownNumberBottom[2].innerHTML = timer.getUTCMinutes();
    
    setTimeout(function() {
        topFlipBox[2].classList.toggle("countdown-element-top-flipped")
        topFlipBox[2].style.visibility="hidden"
    }, 500);
    
 }, 1000*60);

 setInterval(function() {
    topFlipBox[1].classList.toggle("countdown-element-top-flipped")
    topFlipBox[1].style.visibility="visible"
    currentCountdownNumberTop[1].innerHTML = timer.getUTCHours();
    currentCountdownNumberBottom[1].innerHTML = timer.getUTCHours();

    setTimeout(function() {
        topFlipBox[1].classList.toggle("countdown-element-top-flipped")
        topFlipBox[1].style.visibility="hidden"
    }, 500);
    
 }, 1000*60*60);

 setInterval(function() {
    topFlipBox[0].classList.toggle("countdown-element-top-flipped")
    topFlipBox[0].style.visibility="visible"
    currentCountdownNumberTop[0].innerHTML = timer.getUTCDate()-1;
    currentCountdownNumberBottom[0].innerHTML = timer.getUTCDate()-1;
    setTimeout(function() {
        topFlipBox[0].classList.toggle("countdown-element-top-flipped")
        topFlipBox[0].style.visibility="hidden"
        

    }, 500);
 }, 1000*60*60*24);

 