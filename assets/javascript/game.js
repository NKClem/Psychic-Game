//Global Variables
var numWins = 0;
var numLosses = 0;
var numGuesses = 10;
var compLetter, userGuess;
var guessedLetters = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.getElementById("my-game").onload = function() {startGame()};

function startGame() {
  compLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(compLetter);
  display();
}

document.onkeyup = function (event) {
  userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  if (userGuess === compLetter) {
    win();
  } else {
    keepGuessing();
  }
}

//function for game's display
function display() {
  var printWins = document.getElementById("print-wins");
    printWins.innerHTML = numWins;
  var printLosses = document.getElementById("print-losses");
    printLosses.innerHTML = numLosses;
  var printGuesses = document.getElementById("print-guesses"); 
    printGuesses.innerHTML = numGuesses;
  var lettersGuessed = document.getElementById("letters-guessed");
    lettersGuessed.innerHTML = guessedLetters.join(' ');
}

//function if user keeps guessing
function keepGuessing() {
  numGuesses--;
  if (numGuesses > 0) {
  guessedLetters.push(userGuess);
  display();
 } else {
  lose();
 }
}
//function if user guesses correctly
function win() {
  numWins++;
  if (numWins < 5) {
    resetRound();
  } else {
    alert("You are SO psychic!");
    resetGame();
  }
}

//function if user guesses incorrectly ten times
function lose() {
  numLosses++;
  if (numLosses < 5) {
    resetRound();
  } else {
    alert("You're not very psychic... *sad face*");
    resetGame();
  }
}

//function to reset round
function resetRound() {
  numGuesses = 10;
  guessedLetters = [];
  startGame();
}

//function to reset game
function resetGame() {
  numWins = 0;
  numLosses = 0;
  resetRound ();
}