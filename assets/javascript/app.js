$(document).ready(function() {

// questions, timer and result hidden until start button is clicked
    $("#countdown").hide();
    $(".movie-quest").hide();
    $(".finished").hide();
    $(".results").hide();


    // setup variables
    var seconds = 10;
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var unanswered = 0;

    // timer function countdown
    function timerCount() {
        timer = setInterval(countDown, 1000);
    }

    function countDown() {
        seconds--;
        // display timer countdown
        $("#timeRemaining").text(seconds + " seconds");

        // time remaining is equal to 0
        if (seconds === 0) {
            stopTimer();
            overHideAll();
            showSummary();
        }
    }

    // clear timer
    function stopTimer() {
        clearInterval(timer);
    }

    // hide questons and buttons when game over 
    function overHideAll() {
        $(".movie-quest").hide();
        $(".finished").hide();
       
    } 
    
    function showSummary() {
        $(".results").show();

        $("correct-score").text("Correct Answers: " + correctAnswer);
        $("wrong-score").text("Wrong Answers: " + wrongAnswer);
        $("unanswered").text("Unanswered: " + unanswered);

    }

    // start button is clicked show questions, timer and done button
    $("#start-game").on("click", function() {
        $("#start-game").hide();
        $("#countdown").show();
        $(".movie-quest").show();
        $(".finished").show();
            // call functions
            countDown();

    });

});



  
   
//     countDown();



// on click of start button timer countdown begins
    // 120 second timer
// 10 multiple choice questions show
// player selects one answer for each question
// if player finishes before the timer click done button to end game and timer
// else timer endss and game ends
// show the play results

    // clear timer







