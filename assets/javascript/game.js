


    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables of wins, losses and ties. They begin at 0 and the game quits at 10
var wins = 0;
var losses = 0;
var guesses = 10;
var sofar = [];

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice);

alert("Guess what letter I'm thinking of?");
   // after the user presses a key, it will run the following function...
document.onkeypress = function(event) {
  var userGuess = event.key;

  if (userGuess === computerChoice){
      wins++;
  } else{
      guesses--;
  }

  if(guesses === 0){
      losses++;
      alert("GAME OVER!")

  }
 

  sofar.push(userGuess);


  document.getElementById('wins').innerHTML = "Wins: " + wins;
  document.getElementById('losses').innerHTML = "losses: " + losses;
  document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
  document.getElementById('sofar').innerHTML = "Your Guesses So Far:" + sofar;
}