// relative path check
console.log("Cheaters make Baby Jesus cry :'(")

// click event that runs game start function, plays song, and starts timer
$("#start").click(function() {
    song.volume = 0.15
    // song.play();
    game.start()
    
})

// bank of questions & correct answers
var questionBank = [{
    question: "Who committed the infamous error in the 1986 World Series?",
    answers: ["Bill Buckner", "Mookie Wilson", 'Ed "Crazy Legs" McGee', "There was no error"],
    correct: "Bill Buckner"
},  {
    question: "In the Simpsons, what was the name of the supervillian who hired Homer briefly?",
    answers: ["Mr. Burns", "Hank Skorpio", "Lenny", "Professor Frink"],
    correct: "Hank Skorpio"
},  {
    question: "What damage type is super effective against normal Pokemon?",
    answers: ["Fire", "Poison", "Fighting", "What the hell is a Pokemon?"],
    correct: "Fighting"
},  {
    question: "What Ford Mustang trim package & model had the lightest total vehicle weight in 1984?",
    answers: ["GT Convertable", "Cobra", "20th Anniversary Edition", "LX Notchback"],
    correct: "LX Notchback"
},  {
    question: "How many different suits did Robert Di Niro wear in the movie Casino?",
    answers: ["1", "7", "34", "43"],
    correct: "34"
},  {
    question: "Who was the number 1 draft pick in the 1970 NFL Draft?",
    answers: ["Terry Bradshaw", '"Mean" Joe Greene', "Joe Montana", "Dick Butkus"],
    correct: "Terry Bradshaw"
},  {
    question: "What Cornetto flavor was featured in the first film of its trilogy?",
    answers: ["Vanilla", "Chocolate", "Strawberry", "Mint Chocolate Chip"],
    correct: "Strawberry"
},  {
    question: "Who is the cartoonist that created Calvin & Hobbs?",
    answers: ["Charles Schultz", "Jim Davis", "Gary Larson", "Bill Watterson"],
    correct: "Bill Watterson"
},  {
    question: "What NHL goalie currently holds the all-time record for wins?",
    answers: ["Patrick Roy", "Martin Brodeur", "Terry Sawchuk", "Greg Goldberg"],
    correct: "Martin Brodeur"
},  {
    question: "Who was Bruce Lee's master?",
    answers: ["Ip Man", "Jackie Chan", "Sun Lutang", "Wang Ziping"],
    correct: "Ip Man"
},  {
    question: "What was the first probe to orbit Jupiter?",
    answers: ["Juno", "Galileo", "Pioneer 11", "Voyager 2"],
    correct: "Galileo"
},  {
    question: "What Mega Man game features this boss music? (Make sure your volume is up!)",
    answers: ["Mega Man", "Mega Man 2", "Mega Man 3", "Mega Man 4"],
    correct: "Mega Man 2"
}];

// game object containing right/wrong answer tracking & countdown timer

var game = {
    right: 0,
    wrong: 0,
    counter: 100,
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter == 0 ) {
            console.log("Out of time!");
            game.over();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $("#game-area").prepend("<h2>Time Remaining: <span id = 'counter'>45</span> Seconds</h2>");
        $("#start").remove();

        // for loop to populate questions & answers with radio buttons
        for (var i = 0; i < questionBank.length; i++) {
            $("#game-area").append("<h2>" + questionBank[i].question + "</h2>");
            for (var j = 0; j < questionBank[i].answers.length; j++) {
                $("#game-area").append("<input type = 'radio' name = 'question- " + i + " ' value = ' " + questionBank[i].answers[j] + " ' >" + questionBank[i].answers[j])
            }
        }
    },
    over: function() {

        clearInterval(timer);
        // checks each user input and adds to the right or wrong answer counter

        $.each($("input[name='question- 0 ']:checked"), function() {
            if($(this).val() == questionBank[0].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question- 1 ']:checked"), function() {
            if($(this).val() == questionBank[1].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question- 2 ']:checked"), function() {
            if($(this).val() == questionBank[2].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question- 3 ']:checked"), function() {
            if($(this).val() == questionBank[3].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question- 4 ']:checked"), function() {
            if($(this).val() == questionBank[4].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question- 5 ']:checked"), function() {
            if($(this).val() == questionBank[5].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question- 6 ']:checked"), function() {
            if($(this).val() == questionBank[6].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question- 7 ']:checked"), function() {
            if($(this).val() == questionBank[7].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question- 8 ']:checked"), function() {
            if($(this).val() == questionBank[8].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question- 9 ']:checked"), function() {
            if($(this).val() == questionBank[9].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question- 10 ']:checked"), function() {
            if($(this).val() == questionBank[10].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question- 11 ']:checked"), function() {
            if($(this).val() == questionBank[11].correct) {
                game.right++;
            } else {
                game.wrong++;
            }
        });

    this.result();
    },

    result: function() {
        console.log(this.right + " right");
        console.log(this.wrong + " wrong");

        $("#game-area h2").remove();
        $("#game-area").html("<h2>Game Over!</h2>");
        $("#game-area").append("<h3>Right Answers: "+this.right+"</h3>");
        $("#game-area").append("<h3>Wrong Answers: "+this.wrong+"</h3>");
        $("#game-area").append("<h3>Unanswered: "+(questionBank.length-(this.right+this.wrong))+"</h3>")
    }
}