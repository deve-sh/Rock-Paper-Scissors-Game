function rockpaperscissors(nmoves=3){ // Function to set the number of moves a user wants to play with the computer.
	this.score=0;                     // Also the score.
	this.nmoves=nmoves;
	this.elapsed=0;                   // Also sets the number of played moves. At the beginning : 0.
}

function ucfirst(string){             // Function to capitalize the first character.
	if(string)
		return string[0].toUpperCase()+string.slice(1,string.length);
	return "";
}

rockpaperscissors.prototype.increasescore = function() {     // Function to increment the score of the user.
	this.score+=1;
	console.log("Plus One!");
};

rockpaperscissors.prototype.makemove = function(usersmove) {  
	// Prototyped function to check if the user won with a move or not.

	var moves=["rock","paper","scissors"];  // List of valid moves.

	var computermove=moves[Math.round(Math.random()*2)];    // A random number to choose the move for the computer.

	if(this.elapsed<this.nmoves)
	{
		
		console.log("Your Move : "+ucfirst(usersmove)+", Computer's Move : "+ucfirst(computermove));

		switch(usersmove){             // A switch statement to check if the user needs an increased score or not.
			case "scissors":{
								if(computermove==="paper")
									this.increasescore();    // Increase user's score.
								break;
							}
			case "rock":{              // Similarly.
								if(computermove==="scissors")
									this.increasescore();
								break;
			}
			case "paper":{
								if(computermove==="rock")
									this.increasescore();
								break;
			}
			default:{
								console.log("Invalid Move.");
								this.elapsed-=1; // No move taken up by an invalid move.
								break;
			}
		}

		this.elapsed+=1;       // Increase the number of played/elapsed moves.
	}
	else{
		this.checkwin();        // If the number of moves have been met. Then call the checkwin function. 
	}
};

rockpaperscissors.prototype.checkwin = function() { // Function to check if the user won or not.
	if(this.elapsed>=this.nmoves){        // If the required amount of moves have been played.
		if(this.nmoves%2==0)
		{
			if(this.score>=parseInt(this.nmoves/2)) // If the user won more than half the number of times.
				console.log("You win!");
			else
				console.log("You lose!");
		}
		else{
			if(this.score>=parseInt(this.nmoves/2)+1) // If the user won more than half the number of times in an odd round.
				console.log("You win!");
			else
				console.log("You lose!");
		}
	}
	else{
		console.log("Max moves not reached yet.");
	}
};

function starter(nmoves=3){        // Function to start a new Rock-Paper-Scissors game.
	game=new rockpaperscissors(nmoves);
}