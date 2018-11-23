# Program through which one can play Rock Paper Scissors With the Computer.

import random as ra       # Import the random package to generate random numbers.

class rockpapersci():
    def __init__(self,nmoves=3):     # Constructor Function
        self.nmoves=nmoves
        self.elapsed=0
        self.score=0
        
    def ucfirst(self,string):        # Function To Capitalise First Character of a string.
        return str(str(string[0].upper())+str(string[1:]))
    
    def increasescore(self):         # Function to increment score.
        self.score+=1
        print("\nPlus one!")
        
    def checkwin(self):              # Function to check if the user won.
        if(self.elapsed>=self.nmoves):
            if(self.nmoves%2==0):
                if(self.score>=round(self.nmoves/2)):
                    print("\nYou win!")
                else:
                    print("\nYou lose!")
            else:
                if(self.score>=round(self.nmoves/2)+1):  # For Odd Number of Moves, the round function somehow registers incorrectly.
                    print("\nYou win!")
                else:
                    print("\nYou lose!")
        else:
            print("\n\nThe max number of moves haven't been played.")    # If user hasn't played all his moves.
    
    def makemove(self,move):                    # Function to make a move.
        moves=["rock","paper","scissors"]
        computermove=moves[ra.randint(0,2)]     # Computer Move selected randomly among the list of moves.
        if(self.nmoves>self.elapsed):
            print("\nYour move : "+self.ucfirst(move)+" , Computer's Move : "+self.ucfirst(computermove))
            if(move=="rock"):
                if(computermove=="scissors"):
                    self.increasescore()
            elif(move=="scissors"):
                if(computermove=="paper"):
                    self.increasescore()
            elif(move=="paper"):
                if(computermove=="rock"):
                    self.increasescore()
            else:
                print("\nInvalid Move!")
                self.elapsed-=1                 # So no move is wasted on an invalid move. 
            self.elapsed+=1
        else:
            self.checkwin()                     # Call the checkwin() fubction if user has already played all moves.

game = rockpapersci()                           # Start new game.