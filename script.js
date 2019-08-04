//If the guess is correct && the number of blanks remaining is <1 the game is over and results in a win and the score is incremented by 1

//If the guess is correct && the number of blanks remains is > 0 the user gets to immediately guess again (the guesses-left box remains the same)

//If the guess is incorrect && the blanks remaining is the Guesses left box which starts with 4 guesses is decremented by one

//If the number of guesses left is greater than 0 the process starts over

//if the number of guesses left is equal to 0 &&  the number of blanks is greater than 0 the game is over and results in a loss

//if the number of guesses left is equal to 0 && the number of blanks is

let words = ["SAVAGE", "BULK"];

let guessThisWord = words[Math.floor(Math.random() * words.length)];
let letterBlanks = [];
let wordInProgress = [];
let currentGuess = "";
let guessedLetters = [];
let remainingGuesses = 5;

playGame = () => {
  let letters = guessThisWord.split("");
  letterBlanks = letters.length;

  console.log("random word to guess = ", guessThisWord);
  console.log(letters);
  console.log("remaining guesses", remainingGuesses);

  for (let k = 0; k < letters.length; k++) {
    wordInProgress.push("_");
  }
  console.log(wordInProgress);
};

let checkGuess = letter => {
  console.log("user guess", currentGuess);
  if (currentGuess !== guessedLetters[guessedLetters.length - 1]) {
    guessedLetters.push(currentGuess);
    console.log("guessed Letters", guessedLetters);
  }

  let isInWord = false;

  for (let j = 0; j < letterBlanks; j++) {
    if (currentGuess === guessThisWord[j]) {
      isInWord = true;
    }
    console.log(isInWord);
  }
  if (isInWord) {
    for (var l = 0; l < letterBlanks; l++) {
      if (guessThisWord[l] === letter) {
        wordInProgress[l] = letter;
        // document.querySelector("#").innerHTML = wordInProgress.join(" ");
      }
    }
  }
};

document.onkeyup = function(e) {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    currentGuess = e.key.toUpperCase();
    console.log(currentGuess);
  }
  checkGuess(currentGuess);
};

playGame();
