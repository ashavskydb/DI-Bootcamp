import random

print("Tic Tac Toe Game")
print('Welcome!')
print("----------------------")

possibleNumbes = [1,2,3,4,5,6,7,8,9]
gameBoard = [[1,2,3],[4,5,6],[7,8,9]]
rows = 3
columns = 3

def printGameBoard():
    for x in range(rows):
      print("\n+---+---+---+")
      print("|", end='')
      for y in range(columns):
        print("", gameBoard[x][y], end=" |")
    print("\n+---+---+---+")

def modify(num, turn):
    num -= 1
    if(num == 0):
        gameBoard[0][0] = turn
    elif(num == 1):
        gameBoard[0][1] = turn
    elif(num == 2):
        gameBoard[0][2] = turn
    elif(num == 3):
        gameBoard[1][0] = turn
    elif(num == 4):
        gameBoard[1][1] = turn
    elif(num == 5):
        gameBoard[1][2] = turn
    elif(num == 6):
        gameBoard[2][0] = turn
    elif(num == 7):
        gameBoard[2][1] = turn 
    elif(num == 8):
        gameBoard[2][2] = turn 

def checkForWinner(gameBoard):
#x-line
    if(gameBoard[0][0] == 'X' and gameBoard [0][1] == 'X' and gameBoard[0][2]== 'X'):
        print('X has won!')
        return 'X'
    elif(gameBoard[0][0] == 'O' and gameBoard [0][1] == 'O' and gameBoard[0][2]== 'O'):
        print('O has won!')
        return 'O'
    elif(gameBoard[1][0] == 'X' and gameBoard [1][1] == 'X' and gameBoard[1][2]== 'X'):
        print('X has won!')
        return 'X'
    elif(gameBoard[1][0] == 'O' and gameBoard [1][1] == 'O' and gameBoard[1][2]== 'O'):
        print('O has won!')
        return 'O'
    elif(gameBoard[2][0] == 'X' and gameBoard [2][1] == 'X' and gameBoard[2][2]== 'X'):
        print('X has won!')
        return 'X'
    elif(gameBoard[2][0] == 'O' and gameBoard [2][1] == 'O' and gameBoard[2][2]== 'O'):
        print('O has won!')
        return 'O'
#Y-line
    if(gameBoard[0][0] == 'X' and gameBoard [1][0] == 'X' and gameBoard[2][0]== 'X'):
        print('X has won!')
        return 'X'
    elif(gameBoard[0][0] == 'O' and gameBoard [1][0] == 'O' and gameBoard[2][0]== 'O'):
        print('O has won!')
        return 'O'
    elif(gameBoard[0][1] == 'X' and gameBoard [1][1] == 'X' and gameBoard[2][1]== 'X'):
        print('X has won!')
        return 'X'
    elif(gameBoard[0][1] == 'O' and gameBoard [1][1] == 'O' and gameBoard[2][1]== 'O'):
        print('O has won!')
        return 'O'
    elif(gameBoard[0][2] == 'X' and gameBoard [1][2] == 'X' and gameBoard[2][2]== 'X'):
        print('X has won!')
        return 'X'
    elif(gameBoard[0][2] == 'O' and gameBoard [1][2] == 'O' and gameBoard[2][2]== 'O'):
        print('O has won!')
        return 'O'
#Crossline - win
    if(gameBoard [0][0] == 'X' and gameBoard [1][1] == 'X' and gameBoard[2][2]== 'X'):
        print('X has won!')
        return 'X'
    elif(gameBoard[0][0] == 'O' and gameBoard [1][1] == 'O' and gameBoard[2][2]== 'O'):
        print('O has won!')
        return 'O'
    elif(gameBoard[0][2] == 'X' and gameBoard [1][1] == 'X' and gameBoard[2][0]== 'X'):
        print('X has won!')
        return 'X'
    elif(gameBoard[0][2] == 'O' and gameBoard [1][1] == 'O' and gameBoard[2][0]== 'O'):
        print('O has won!')
        return 'O'

leaveLoop = False
turn = 'X'
turnCounter = 0
while(leaveLoop == False):
    if(turnCounter % 2 == 1):
        printGameBoard()
        numberPiked = int(input("\nChoose a number [1-9]: "))
        if(numberPiked >= 1 or numberPiked <= 9):
            modify(numberPiked, 'X')
            possibleNumbes.remove(numberPiked)
        else:("Invalid input. Please try again")
        turnCounter += 1

    else:
        while (True):
            cpuChoice = random.choice(possibleNumbes)
            print('\nCPU Choice: ', cpuChoice)
            if (cpuChoice in possibleNumbes):
                modify(cpuChoice,'0')
                possibleNumbes.remove(cpuChoice)
                turnCounter += 1
                break  
