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
},]