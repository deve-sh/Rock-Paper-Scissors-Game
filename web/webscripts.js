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
	document.getElementsByClassName('score')[0].innerHTML=this.score; // Update Score Being Shown to User.
};

rockpaperscissors.prototype.makemove = function(usersmove) {  
	// Prototyped function to check if the user won with a move or not.

	var moves=["rock","paper","scissors"];  // List of valid moves.

	var computermove=moves[Math.round(Math.random()*2)];    // A random number to choose the move for the computer.

	if(this.elapsed<this.nmoves)
	{
		document.getElementsByClassName('yourmove')[0].innerHTML="<b>"+ucfirst(usersmove)+"</b>";
		document.getElementsByClassName('computersmove')[0].innerHTML="<b>"+ucfirst(computermove)+"</b>";

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

		document.getElementsByClassName('elapsed')[0].innerHTML=this.elapsed;

		if(this.elapsed==this.nmoves)
			this.checkwin();
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
			{
				document.getElementsByClassName('wincheck')[0].innerHTML="<br><br>Yay! You Won!";
			}
			else
			{
				document.getElementsByClassName('wincheck')[0].innerHTML="<br><br>Nay! You Lost!";
			}
		}
		else{
			if(this.score>=parseInt(this.nmoves/2)+1) // If the user won more than half the number of times in an odd round.
			{
				document.getElementsByClassName('wincheck')[0].innerHTML="<br><br>Yay! You Won!";
			}
			else
			{
				document.getElementsByClassName('wincheck')[0].innerHTML="<br><br>Nay! You Lost!";
			}
		}
	}
	else{
		console.log("Max moves not reached yet.");
	}
};

function starter(nmoves){        // Function to start a new Rock-Paper-Scissors game.

	if(!nmoves)
		nmoves=3;

	game=new rockpaperscissors(nmoves);

	if(document.getElementById('second')){
		document.getElementById('second').outerHTML="";   // Remove the element.
	}

	if(document.getElementsByTagName('footer').length>0)
	{
		document.getElementsByTagName('footer')[0].outerHTML=""; // Remove the footer.
	}
	
	var htmlscript="<div id='second'>";

	// Elapsed and Remianing Moves 

	htmlscript+="<div id=\"scoreboard\" align=\'center\'><span class=\"elapsed\"></span> / <span class=\"nmoves\"></span></div><br><br>";
	
	// Score Shower

	htmlscript+="<div class='scoring' id='scoreboard' align='center'>Score : <span class='score'></span></div><br><br>";
	
	// Move Makers

	htmlscript+="<div id='movemaker' align='center'><span onclick=\"game.makemove(\'rock\')\" class='mover'><i class=\"fas fa-hand-rock fa-5x\"></i></span><span onclick=\"game.makemove(\'scissors\')\" class='mover'><i class=\"fas fa-hand-scissors fa-5x\"></i></span><span onclick=\"game.makemove(\'paper\')\" class='mover'><i class=\"fas fa-hand-paper fa-5x\"></i></span></div>";

	// Move Shower

	htmlscript+="<br><br><div align='center' class='moveshower'><span class='yourmove'></span> Vs <span class='computersmove'></span></div>";
	
	// Win Shower

	htmlscript+="<div align='center'><div class='wincheck'></div></div>";

	// Reset Button

	htmlscript+="<br><br><div align='center' onclick=\'reset()\'><div class='resetbutton'>Restart</div></div>";

    // Close

	htmlscript+="</div><footer><i class=\"fas fa-heart\"></i> &nbsp&nbspMade By <a href=\"https://deve-sh.github.io/website\" target=\"_blank\">Devesh Kumar</a>.</footer>";

	$("body").append(htmlscript);       // jQuery to append the HTML for the second element.

	// Now main execution.

	document.getElementsByClassName("elapsed")[0].innerHTML=game.elapsed;
	document.getElementsByClassName("nmoves")[0].innerHTML=game.nmoves;

	document.getElementsByClassName("score")[0].innerHTML=game.score;
}

function reset(){
	if(document.getElementById('second')){
		document.getElementById('second').outerHTML=""; // Delete The Div.
	}

	if(document.getElementsByTagName('footer')){
		document.getElementsByTagName('footer')[0].outerHTML=""; // Delete the footer.
	}
	// Now restart the game.
}