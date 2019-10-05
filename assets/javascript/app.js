// on click of start button timer countdown begins
// 10 multiple choice questions show
// player selects one answer for each question
// if player finishes before the timer click done button to end game and timer
// else timer endss and game ends
// show the play results

var seconds = 120;
var timer;

var countDown = function() {
    seconds--;
    $("#timeRemaining").text(seconds + " seconds");
if (seconds === 0) {
    clearInterval(window.timer);
}
    // clear timer
}
timer = setInterval(countDown, 1000);


console.log(timer);




