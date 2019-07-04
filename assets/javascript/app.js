// relative path check
console.log("Cheaters make Baby Jesus cry :'(")

// click event that replaces the button with questions, plays song, and starts timer
$("#start").click(function() {
    $("#game-area").remove();
    song.volume = 0.15
    song.play();
})

// bank of questions & correct answers
var questionBank = [{
    question: "Who committed the infamous error in the 1986 World Series?",
    answers: ["Bill Buckner", "Mookie Wilson", 'Ed "Crazy Legs" McGee', "Sportsball?  I don't follow sportsball"],
    correct: "Bill Buckner"
},  {
    question: "In the Simpsons, what was the name of the supervillian who hired Homer briefly?",
    answers: ["Mr. Burns", "Hank Skorpio", "Lenny", "Professor Frink"],
    correct: "Hank Skorpio"
},  {
    question: "What damage type is super effective against normal Pokemon?",
    answers: ["Fire", "Poison", "Fighting", "What the hell are you talking about?"],
    correct: "Fighting"
},  {
    question: "What was the Ford Mustang trim package & model had the lightest total vehicle weight in 1984?",
    answers: ["GT Convertable", "Cobra", "20th Anniversary Edition", "LX Notchback"],
    correct: "LX Notchback"
},  {
    question: "",
    answers: [],
    correct: ""
},  {
    question: "",
    answers: [],
    correct: ""
},  {
    question: "",
    answers: [],
    correct: ""
},  {
    question: "",
    answers: [],
    correct: ""
},  {
    question: "",
    answers: [],
    correct: ""
},  {
    question: "",
    answers: [],
    correct: ""
},  {
    question: "",
    answers: [],
    correct: ""
},  {
    question: "What Mega Man game features this boss music? (Turn up your volume if you don't hear the music)",
    answers: ["Mega Man", "Mega Man 2", "Mega Man 3", "Mega Man 4"],
    correct: "Mega Man 2"
},]