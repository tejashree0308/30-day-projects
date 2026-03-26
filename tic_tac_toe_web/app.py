from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

board = ["" for _ in range(9)]
current_player = "X"
winner = None

def check_winner(player):
    wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    return any(all(board[i] == player for i in combo) for combo in wins)

@app.route("/")
def index():
    return render_template("index.html", board=board, winner=winner, player=current_player)

@app.route("/move/<int:pos>")
def move(pos):
    global current_player, winner

    if not winner and board[pos] == "":
        board[pos] = current_player

        if check_winner(current_player):
            winner = current_player
        elif "" not in board:
            winner = "Draw"
        else:
            current_player = "O" if current_player == "X" else "X"

    return redirect(url_for("index"))

@app.route("/reset")
def reset():
    global board, current_player, winner
    board = ["" for _ in range(9)]
    current_player = "X"
    winner = None
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)