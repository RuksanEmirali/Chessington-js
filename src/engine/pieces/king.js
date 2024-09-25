import Piece from './piece';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class King extends Piece {
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

    isEmpty(board, x, y){
        return board.getPiece(Square.at(x, y)) === undefined
    }

    isOpponent(board, x, y){
        return this.player != board.getPiece(Square.at(x,y)).player
    }

    isKing(board, x, y){
        return (board.getPiece(Square.at(x, y)) instanceof King)
    }

    getAvailableMoves(board) {
        let posMoves = []
        let location = board.findPiece(this)
        for (let i = location.col-1; i<location.col+2; i++){
            if(this.isOnBoard(board, location.row + 1, i)
                && (this.isEmpty(board, location.row + 1, i)
                    ||(this.isOpponent(board, location.row + 1, i)
                        && !this.isKing(board, location.row + 1, i)))) {
                this.addMove(posMoves, location.row + 1, i)
            }
            if(this.isOnBoard(board, location.row - 1, i)
                && (this.isEmpty(board, location.row - 1, i)
                    ||(this.isOpponent(board, location.row - 1, i)
                        && !this.isKing(board, location.row - 1, i)))) {
                this.addMove(posMoves, location.row - 1, i)
            }
        }
        if(this.isOnBoard(board, location.row, location.col-1)
            && (this.isEmpty(board, location.row, location.col-1)
                ||(this.isOpponent(board, location.row, location.col-1)
                    && !this.isKing(board, location.row, location.col-1)))) {
            this.addMove(posMoves, location.row, location.col-1)
        }
        if(this.isOnBoard(board, location.row, location.col+1)
            && (this.isEmpty(board, location.row, location.col+1)
                ||(this.isOpponent(board, location.row, location.col+1)
                    && !this.isKing(board, location.row, location.col+1)))) {
            this.addMove(posMoves, location.row, location.col+1)
        }
        return posMoves;
    }
}
