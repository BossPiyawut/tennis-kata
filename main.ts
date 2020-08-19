export function updateGameScore(player1Points: number, player2Points: number): Game {
    return new Game(player1Points, player2Points)
}

export function decideGameWinner(game: Game): string {
    const player1Points = game.player1Points
    const player2Points = game.player2Points
    
    if (player1Points>= 3 && player2Points>=3) {
        // deuce
        if (player1Points - player2Points >= 2){
            return 'Player 1'
        } else if (player2Points - player1Points >= 2){
            return 'Player 2'
        } else {
            return 'Unfinish'
        }

    } else {
        //not deuce
        if (player1Points==4 && player2Points < 3){
            return 'Player 1'
        } else if (player2Points==4 && player1Points < 3) {
            return 'Player 2'
        } else {
            return 'Wrong score'
        }
    }
    return 'Error'
}

export function printScore(scoreArray: Array<number>): string {
    const scoreNameArray = ['love', 'fifteen','thirty', 'forty']
    if (scoreArray.length == 2){
        const player1Points = scoreArray[0]
        const player2Points = scoreArray[1]
        //check can deuce
        if (player1Points>=3 && player2Points>=3){
            if (player1Points == player2Points){
                return 'deuce'
            } else if (player1Points > player2Points){
                return 'advantage player 1'
            } else {
                return 'advantage player 2'
            }
        } else {
            return `${scoreNameArray[player1Points]} - ${scoreNameArray[player2Points]}`
        }
    }
    return 'Error'
}

class Game {
    public player1Points: number
    public player2Points: number

    constructor(player1Points: number, player2Points: number){
        this.player1Points = player1Points
        this.player2Points = player2Points
    }
}