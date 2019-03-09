


// Options for a player to choose from. Do I need to do this since its the whole alphabet? or is this assumed because of the type of event that I will use later?
var playerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Variables to hold the scores of wins/losses
var wins = 0;
var losses = 0;
var guesses = 15;
var numOfGuesses = 0;


// Create variables that hold references to HTML 

var userGuess = document.getElementById("userGuess");
var numberOfWins = document.getElementById("numberOfWins");
var numberOfLosses = document.getElementById("numberOfLosses");
var guessesLeft = document.getElementById("guessesLeft");
var guessesSoFar = document.getElementById("guessesSoFar");

// Create an object that holds functions for guesses (if statements inside the functions), so that they can be called later for the onkey event? (reference car game/RPS) 


// randomize what the computer's letter will be. 

// var computerLetter = playerChoices[Math.floor(Math.random() * playerChoices.length)];



// write the onkey functions for the players guesses. 





document.onkeyup = function(event){

    var playerGuess = event.key;
    console.log(playerGuess);

    var computerLetter = playerChoices[Math.floor(Math.random() * playerChoices.length)];
    console.log(computerLetter);

    if(playerGuess === computerLetter){
        wins++;
        numOfGuesses++;
    }

    if(playerGuess !== computerLetter){
        losses++;
        guesses--;
        numOfGuesses++;
    
    }

    if(guesses === 0){
      prompt("you lose! Try again?");
      
          losses = 0;
          wins = 0;
          guesses = 15;
          numOfGuesses = 0;
      
       
    }

    // if(gameOver === true){
    //     clearInterval();
    // }

    

    
    // for(var i = 0; guesses === 0; i++){
    //     alert("You Lose!")
    

    userGuess.textContent = "Guess what letter I am thinking of:" + " " + playerGuess;
    numberOfWins.textContent = "Wins:" + " " + wins;
    numberOfLosses.textContent = "Losses:" + " " + losses;
    guessesLeft.textContent = "Number of Guesses left:" + " " + guesses;





};

// add another if statement with a for loop inside it giving the condition of when the game ends. 
// try to make only one random letter chosen for the first five plays


    // userGuess.textContent = "Guess what letter I am thinking of:" + playerGuess;
    // numberOfWins.textContent = "Wins:" + wins;
    // numberOfLosses.textContent = "Losses:" + losses;
    // guessesLeft.textContent = "Number of Guesses left:" + guesses;

// update the score

// print the guesses/score updates? (.textContent)

// Things I have tried to make the onkey work: added addeventlistener.
