// Create a word list
	var wordList = ["mantle", "ruth", "yogi", "jeter"];

	var word = wordList[Math.floor(Math.random()* wordList.length)];
	console.log("The word to guess is: " + word);
	var answerArray = [];

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	var guessesLeft = 6;
	var guessStr = "You have " + guessesLeft + " tries left"; 

	for(var i = 0; i < word.length; i++) { answerArray[i] = "_";
	}
	var remainingLetters = wordList.length;
	// The game loop
	while (remainingLetters > 0) {
	// Show the player their progress
	alert(answerArray.join(" "));

	// var guess = prompt("Guess a letter");
	if (userGuess === null){
		break;
	} else if(userGuess.length !==1) {
		alert
	}else{
		for(var j = 0; j < wordList.length; j++) {
			if (word[j] === userGuess) {
				answerArray[j] = userGuess;
				remainingLetters--;
				}
			}
		}
	}

}; // Ends document.onkeyup()
