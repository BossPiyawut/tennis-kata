export function updateGameScore(player1Score: number, player2Score: number): Game {
    return new Game(player1Score, player2Score)
}

export function decideGameWinner(game: Game): string {
    return game.decideGameWinner()
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

class Player {
    public score: number;

    constructor(score: number) {
        this.score = score
    }

    getScore(): number {
        return this.score
    }

    setScore(score: number) {
        this.score = score
    }

    isMoreThan(score: number): boolean {
        return this.score > score
    }

    canDeuce(): boolean {
        return this.score > 2
    }
}


class Game {
    public player1: Player
    public player2: Player

    constructor(player1Score: number, player2Score: number) {
        this.player1 = new Player(player1Score)
        this.player2 = new Player(player2Score)
    }

    getPlayerScore(): [number, number] {
        return [this.player1.getScore(), this.player2.getScore()]
    }

    setPlayerScore(player1Score: number, player2Score: number) {
        if (player1Score) {
            this.player1.setScore(player1Score)
        }
        if (player2Score) {
            this.player2.setScore(player2Score)
        }
    }

    decideGameWinner(): string {

        if (this.player1.canDeuce() && this.player2.canDeuce()) {
            if (this.player1.getScore() - this.player2.getScore() > 1){
                return 'Player 1'
            } else if (this.player2.getScore() - this.player1.getScore() > 1){
                return 'Player 2'
            } else {
                return 'Unfinish'
            }
        } else {
            if (this.player1.getScore()==4 && this.player2.getScore() < 3){
                return 'Player 1'
            } else if (this.player2.getScore()==4 && this.player1.getScore() < 3) {
                return 'Player 2'
            } else {
                return 'Wrong Score'
            }
        }
        return 'Error'
    }
}