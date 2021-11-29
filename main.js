const topFlipBox = document.getElementsByClassName("countdown-element-top");
const currentCountdownNumberBottom = document.getElementsByClassName("countdown-element-number-bottom");
const currentCountdownNumberTop = document.getElementsByClassName("countdown-element-number-top-next");

let timer = new Date(14*24*60*60*1000); //length of timer countdown

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

    currentCountdownNumberTop[2].innerHTML = timer.getUTCMinutes();
    currentCountdownNumberBottom[2].innerHTML = timer.getUTCMinutes();
    currentCountdownNumberTop[1].innerHTML = timer.getUTCHours();
    currentCountdownNumberBottom[1].innerHTML = timer.getUTCHours();
    currentCountdownNumberTop[0].innerHTML = timer.getUTCDate()-1;
    currentCountdownNumberBottom[0].innerHTML = timer.getUTCDate()-1;

    if(timer.getSeconds() == 59 ){ //flip minute card
        topFlipBox[2].classList.toggle("countdown-element-top-flipped")
        topFlipBox[2].style.visibility="visible"
        setTimeout(function() {
            topFlipBox[2].classList.toggle("countdown-element-top-flipped")
            topFlipBox[2].style.visibility="hidden"
        }, 300);
    }
    if(timer.getUTCMinutes() == 59 && timer.getSeconds() == 59){ //flip hour card
        topFlipBox[1].classList.toggle("countdown-element-top-flipped")
        topFlipBox[1].style.visibility="visible"
        setTimeout(function() {
            topFlipBox[1].classList.toggle("countdown-element-top-flipped")
            topFlipBox[1].style.visibility="hidden"
        }, 300);
    }
    if(timer.getUTCHours() == 23 && timer.getUTCMinutes() == 59 && timer.getSeconds() == 59 ){ //flip days card
        topFlipBox[0].classList.toggle("countdown-element-top-flipped")
        topFlipBox[0].style.visibility="visible"
        setTimeout(function() {
            topFlipBox[0].classList.toggle("countdown-element-top-flipped")
            topFlipBox[0].style.visibility="hidden"
        }, 300);
    }
 }, 1000); 