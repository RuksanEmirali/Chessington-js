import Piece from './piece';
import GameSettings from '../gameSettings';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    addMove(posMoves, x, y){
        posMoves.push(Square.at(x, y))
    }

    isOnBoard(board, x, y){
        return (x < GameSettings.BOARD_SIZE 
            && y < GameSettings.BOARD_SIZE
            && x>= 0 && y >= 0)
    }

    getAvailableMoves(board) {
        let posMoves = []
        let location = board.findPiece(this)
        let i = location.row + 2
        if (this.isOnBoard(board, i, location.col + 1)){
            this.addMove(posMoves, i, location.col + 1)
        }
        if (this.isOnBoard(board, i, location.col - 1)){
            this.addMove(posMoves, i, location.col - 1)
        }
        
        i = location.row - 2
        if (this.isOnBoard(board, i, location.col + 1)){
            this.addMove(posMoves, i, location.col + 1)
        }
        if (this.isOnBoard(board, i, location.col - 1)){
            this.addMove(posMoves, i, location.col - 1)
        }

        i = location.col - 2
        if (this.isOnBoard(board, location.row - 1, i)){
            this.addMove(posMoves, location.row - 1, i)
        }
        if (this.isOnBoard(board, location.row + 1, i)){
            this.addMove(posMoves, location.row + 1, i)
        }

        i = location.col + 2
        if (this.isOnBoard(board, location.row - 1, i)){
            this.addMove(posMoves, location.row - 1, i)
        }
        if (this.isOnBoard(board, location.row + 1, i)){
            this.addMove(posMoves, location.row + 1, i)
        }

        return posMoves;
    }
}
