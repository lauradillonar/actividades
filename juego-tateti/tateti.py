TOTAL_ROW = 4
TOTAL_COL = 7

def create_empty_board():
    
    b = []

    for row in range(TOTAL_ROW):
        b.append([" "] * TOTAL_COL)
    
    b[0][2]="1"
    b[0][4]="2"
    b[0][6]="3"

    b[1][0]="A"
    b[2][0]="B"
    b[3][0]="C"

    
    for r in range (1,TOTAL_ROW):
        b[r][2]="_"
        b[r][4]="_"
        b[r][6]="_"

    return b

    

def show_board(b):
    
    s = ""
    for row in range(TOTAL_ROW):
        for col in range(TOTAL_COL):
           s += (b[row][col])
        print (s)
        s=""
    print ("\nT para terminar.\n")

def input_row():
    valid = False
    while not valid:
        print("\nJuega", player)
        r = str(input("Fila: "))
        if r.upper() == "A": 
            return 1
        elif r.upper() == "B": 
            return 2
        elif r.upper() == "C":
            return 3
        elif r.upper() == "T":
            return 0
        print ("\nIngresa A,B,C para elegir una fila. \n")

def input_column():
    valid = False
    while not valid:
        print("\nJuega", player)
        r = str(input("Columna: "))
        if r.upper() == "1": 
            return 2
        elif r.upper() == "2": 
            return 4
        elif r.upper() == "3":
            return 6
        elif r.upper() == "T":
            return 0
        print ("\nIngresa 1,2,3 para elegir una columna. \n")

def is_valid (r,c,b):
    if b[r][c] == "_": return True
    else: 
        print ("Ingresa una posición libre en el tablero.")
        return False

def is_end (the_end):
    if the_end == 0: return True
    else: return False

def change (the_player):
    if the_player == "X": return "O"
    else: return "X"

def is_line(b):
    c = 2;
    for c in range(2,7,2):
        if b[1][c] != "_" and b[1][c] == b[2][c] and b[2][c] == b[3][c]: 
            return True
    
    for r in range(1,4):
        if b[r][2] != "_" and b[r][2] == b[r][4] and b[r][4] == b[r][6]: 
            return True
    
    if b[1][2] != "_" and b[1][2] == b[2][4] and b[2][4] == b[3][6]: 
        return True
    
    if b[3][2] != "_" and b[3][2] == b[2][4] and b[2][4] == b[1][6]:        
        return True
    else:
        return False    



board = create_empty_board()
show_board(board)
winner = ""
player = "X"
end = False
count = 0

while count < 9 and not end:
    row = input_row()
    if not is_end(row): 
        col = input_column()
        if not is_end(col):
            if is_valid(row,col,board):
                board[row][col] = player
                count+=1
                show_board(board)
                if is_line(board):
                    end = True
                    print ("Hay linea")
                    winner = player
                player = change(player)
        else:
            winner = change(player)
            end = True
    else:
        winner = change(player)
        end = True

if count == 9 and winner == "":
    print ("\nEMPATE \n")
else:
    if count < 9: 
        print ("\nEl ganador es ", winner)

    
print ("\n*** FIN DEL JUEGO ***")


     
