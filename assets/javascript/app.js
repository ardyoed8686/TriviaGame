$(document).ready(function() {

// questions, timer and result hidden until start button is clicked
    $("#countdown").hide();
    $(".movie-quest").hide();
    $(".finished").hide();
    $(".results").hide();


    // setup variables
    var seconds = 30;
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var unanswered = 0;

    // timer function countdown
    function timerCount() {
        timer = setInterval(countDown, 1000);
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
        unanswered = (9-(correctAnswer+wrongAnswer));
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

    // start button is clicked show questions, timer and done button
    $("#start-game").on("click", function() {
        $("#start-game").hide();
        $("#countdown").show();
        $(".movie-quest").show();
        $(".finished").show();
            // call functions
        timerCount();
    });


    // when answer button is clicked
    $("input[type=radio]").on("change", function() {
        correctAnswer = $("input[value=correct]:checked").length;
        wrongAnswer = $("input[value=wrong]:checked").length;
        unanswered = (8-(correctAnswer+wrongAnswer));
        console.log(correctAnswer+wrongAnswer);
        // console.log(wrongAnswer);
        // console.log(unanswered);
    
    });

    // on click of the done button
    $("#all-done").on ("click", function() {
        $("#start-game").hide();
        $("#countdown").hide();
        $(".movie-quest").hide();
        $(".finished").hide();

        showSummary();
    });



});
