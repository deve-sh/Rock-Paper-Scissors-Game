# <div align='center'>Rock Paper Scissors Game</div>

The simplest and sexiest Rock Paper Scissors Game written in both JavaScript and Python.

## Cloning / Downloading the Game

Open your Git Command Line, cd to any directory. Type in the following commands to the command line : 

```Git
git clone https://github.com/deve-sh/Rock-Paper-Scissors-Game.git

cd Rock-Paper-Scissors-Game
```

## Playing it in the Browser.

Download or Clone the repository, and move to the <b>web/</b> folder. There exists the necessary files for running the game in the Web Browser.

Open <b>index.html</b> in your Web Browser and play.

## Playing it in the console.

The Project also contains fully fledged Console Based Script. The <b>scripts.js</b> file is used hence.

Just load the file and in the console type the following commands, the first function creates an object named <b>game</b> : 

```javascript

starter();                  // Pass the number of moves. Default : 3

game.makemove("scissors");  // Makes a scissors move. And logs whether the user won or not.

game.checkwin();            // Checks if the user won.

```

The <b>increasescore()</b> function's seperate usage is not recommended.

## Python Code Skeleton

The Project also comes with a <b>Python.py</b> file which has a class <b>rockpapersci</b>.

Just create an object for the game you want to play, and pass in the no of moves to the object. (Default : 3).

```python

game = rockpapersci(4)        # Creates an object named game and assigns 4 moves to the game.

game.makemove("rock")         # Makes a rock move. And Prints the result.

game.checkwin()               # Checks if the user won.

```

## Support and Copyright


The Project is Copyright free (As there are numerous other free and open Rock Paper Scissors Game Skeletons out there).

For any sort of support, feel free to contact me at the following.

Website : <a href="https://goo.gl/EtGNTJ" target="_blank">Visit Me.</a><br>
Email   : <a href="mailto:devesh2027@gmail.com" target="_blank">Mail Me.</a>