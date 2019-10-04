var number = 30;
var timer;

var countDown = function() {
    number--;
    $("#timeRemaining").text(number + " seconds");
if (number === 0) {
    clearInterval(window.timer);
}
    // clear timer
}
timer = setInterval(countDown, 1000);
timer();
console.log("timeRemaining");