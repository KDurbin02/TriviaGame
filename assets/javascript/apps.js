//create an array of questions, answers, correctAnswers, and images
//set up a begin function to show question with choices
//create a timer
//if else question correct/ wrong / timer runs out show answer with picture 
//show next question
//once done with questions show how many right and how many wrong
//reset button to begin again

var hidden = [];
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
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    countdown: function() {
        game.counter--;
        $("#timer").html("Time Remaining" + game.counter);
        if (game.counter <= 0) {
            console.log("TIME UP!");
            game.timeUp()
        }

    }, //timer function

    loadQuestion: function() {
        timer = setInterval(game.counter, 1000);
        $("#question").html('<h2>' + questions[game.currentQuestion].question + '</h2>');
        for (var i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $("#choices").append('<input type = "radio" name = "answer" value= "' +
                questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '');
        }
        //create question with answer choices
        $("#choices").append('<button id = "submit">  Submit  </button>')
        $("#submit").click(function(event) {
            event.preventDefault();
            game.countdown();
            game.clicked();
        }); //submit click 


    },
    nextQuestion: function() {

    },
    timeUp: function() {

    },
    results: function() {

    },
    clicked: function() {
        $('input[name="answer"]:checked').val();
        var checkedAnswer = document.getElementsByName('answer')
        console.log("hello");
        var i = 0;
        var hiddenHTML = questions[game.currentQuestion].correctAnswer[i];
        hiddenHTML.innerHTML = hidden.join("");
        //var checkedAnswer =  questions[game.currentQuestion].correctAnswer.join(' ');
        for (i = 0; i < questions[game.currentQuestion].correctAnswer.length; i++)
            console.log(questions[game.currentQuestion].correctAnswer[i]); {
            if (checkedAnswer === questions[game.currentQuestion].correctAnswer[i]) {
                alert("Correct!"); //right answer
                game.nextQuestion(); //goes to next question
            } else { //wrong answer
                alert("Incorrect");
                game.nextQuestion(); //goes to next question
            }
        }

    },
    endGame: function() {

    },

    reset: function() {

    },
}

$("#start").click(function() {
    $("#start").remove();
    game.loadQuestion();
    console.log(game.currentQuestion);

});