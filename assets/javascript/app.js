// array of questions and answers
var trivia = {[
    
]} In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?
// on click of start button timer countdown begins
    // 120 second timer
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





