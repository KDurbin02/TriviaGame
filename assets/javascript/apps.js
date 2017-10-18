//create an array of questions, answers, correctAnswers, and images
//set up a begin function to show question with choices
//create a timer
//if else question correct/ wrong / timer runs out show answer with picture 
//show next question
//once done with questions show how many right and how many wrong
//reset button to begin again

var questions = [{
        question: "What Chelsea manager was famously sacked in December of 2015, less than a year after winning the title?",
        answers: ['Robert DiMatteo', 'Avram Grant', 'Jose Mourinho', 'Carlo Ancelotti'],
        correctAnswer: 'Jose Mourinho',
        image: "assets/images/josemourinho.jpg"
    },
    {
        question: "What player was Chelsea's record signing prior to Alvaro Morata being purchased in 2017 for $78 million?",
        answers: ['Frank Lampard', 'Didier Drogba', 'Nicholas Anelka', 'Frenando Torres'],
        correctAnswer: 'Frenando Torres',
        image: "assets/images/fernandotorres.jpg"
    },
    {
        question: "Who holds the all-time scoring record for Chelsea with 211 goals?",
        answers: ['Gianfranco Zola', 'Frank Lampard', 'Didier Drogba', 'Eden Hazard'],
        correctAnswer: 'Frank Lampard',
        image: "assets/images/frankLampard.jpg"
    },
    {
        question: "In the 2012 Champions League final, Chelsea prevailed over which team?",
        answers: ['FC Barcelona', 'Inter Milan', 'Bayern Munich', 'Real Madrid'],
        correctAnswer: 'Bayern Munich',
        image: "assets/images/2012championsLeague.jpg"
    },
    {
        question: "In the modern premier league era, how many titles has Chelsea won?",
        answers: ['3', '7', '5', '4'],
        correctAnswer: '5',
        image: "assets/images/titleWin.jpg"
    },
    {
        question: "In what year was Chelsea FC founded?",
        answers: ['1905', '1928', '1895', '1910'],
        correctAnswer: '1905',
        image: 'assets/images/1905.jpg'
    }
]


var game = {
    playing: false,
    questions: questions,
    currentQuestion: 0,
    correct: 0,
    incorrect: 0,

    counter: 0,
    timer: setInterval(function() { //timer won't stop something with the function name maybe?
        if (game.counter == 0) {
            if (game.playing == true) {
                game.timeUp();
                clearInterval(game.timer);
            }
        } else {
            $("#timer").html("Time Remaining: " + game.counter);
            game.counter--;
        }
    }, 1000), //timer function

    loadQuestion: function() {
        game.playing = true;
        game.counter = 30;
        game.timer;
        $("#question").html('<h2>' + questions[game.currentQuestion].question + '</h2>');
        $("#choices").html('');
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $("#choices").append('<input type = "radio" name = "answer" value= "' +
                questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '');
        } //create question with answer choices
        $("#choices").append('<button id = "submit">  Submit  </button>')
        $("#submit").click(function(event) {
            event.preventDefault();
            game.clicked();
        }); //submit click 
    },
    timeUp: function() {
        $("#answer").html("Time Up: " + questions[game.currentQuestion].correctAnswer);
        document.getElementById("picture").src = questions[game.currentQuestion].image; //picture won't work
        $("#choices").html('');
        $("#button").append('<button class = "next"> Next Question </button');
        game.incorrect++;
    },
    clicked: function() {
        clearInterval(game.timer);
        var checkedAnswer = $('input[name="answer"]:checked').val();
        console.log(questions[game.currentQuestion].correctAnswer);
        //right answer
        if (checkedAnswer=== questions[game.currentQuestion].correctAnswer) {
            $("#answer").html("Correct: " + questions[game.currentQuestion].correctAnswer);
            document.getElementById("picture").src = (questions[game.currentQuestion].image); //picture won't work
            $("#choices").html('');
            $("#button").append('<button class = "next"> Next Question </button');
            game.correct++;

        } else { //wrong answer
            clearInterval(game.timer);
            $("#answer").html("Incorrect: " + questions[game.currentQuestion].correctAnswer);
            $("#picture").append('<img src= questions[game.currentQuestion].image>'); //picture won't work
            $("#choices").html('');
            $("#button").append('<button class = "next"> Next Question </button');
            game.incorrect++;
        }
        game.currentQuestion++;
        $("#button").click(function() {
            game.nextQuestion();
        }); //goes to next question
    },


    nextQuestion: function() {
        $("#button").html('');
        $("#answer").html('');
        $("#picture").html('');
        if (game.currentQuestion <= 5) {
            game.loadQuestion(game.currentQuestion);
        } else {
            game.endGame();
        }
    },

    endGame: function() {
        $("#question").html("<h2> Way to Go! </h2>");
        $("#choices").html( 'Correct Answers: ' + game.correct + '<br>Incorrect Answers: ' + game.incorrect );
        $("#picture").html('');
        $("#button").append('<button class = "next"> Play Again </button>')
        $("#button").click(function() {
            game.reset();
        });

    },

    reset: function() {
        playing: false;
        questions: questions;
        currentQuestion: 0;
        correct: 0;
        incorrect: 0;

        counter: 0;
        game.loadQuestion();

    },
}

$("#start").click(function() {
    $("#start").remove();
    console.log(game.currentQuestion);

    game.loadQuestion(game.currentQuestion);
});