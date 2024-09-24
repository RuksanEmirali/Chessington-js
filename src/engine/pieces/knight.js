import Piece from './piece';
import GameSettings from '../gameSettings';
import Square from '../square';
import King from './king';

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

    isOccupied(board, x, y){
        return board.getPiece(Square.at(x, y)) !== undefined
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
        let i = location.row + 2
        if (this.isOnBoard(board, i, location.col + 1)
            && (!this.isOccupied(board, i, location.col + 1)
                || (this.isOpponent(board, i, location.col + 1) && !this.isKing(board, i, location.col + 1)))){
            this.addMove(posMoves, i, location.col + 1)
        }
        if (this.isOnBoard(board, i, location.col - 1)
            && (!this.isOccupied(board, i, location.col - 1)
                || (this.isOpponent(board, i, location.col - 1)&& !this.isKing(board, i, location.col - 1)))){
            this.addMove(posMoves, i, location.col - 1)
        }
        
        i = location.row - 2
        if (this.isOnBoard(board, i, location.col + 1)
            && (!this.isOccupied(board, i, location.col + 1)
                || (this.isOpponent(board, i, location.col + 1)&& !this.isKing(board, i, location.col + 1)))){
            this.addMove(posMoves, i, location.col + 1)
        }
        if (this.isOnBoard(board, i, location.col - 1)
            && (!this.isOccupied(board, i, location.col - 1)
                || (this.isOpponent(board, i, location.col - 1)&& !this.isKing(board, i, location.col - 1)))){
            this.addMove(posMoves, i, location.col - 1)
        }

        i = location.col - 2
        if (this.isOnBoard(board, location.row - 1, i)
            && (!this.isOccupied(board, location.row - 1, i)
                || (this.isOpponent(board, location.row - 1, i) && !this.isKing(board, location.row - 1, i)))){
            this.addMove(posMoves, location.row - 1, i)
        }
        if (this.isOnBoard(board, location.row + 1, i)
            && (!this.isOccupied(board, location.row + 1, i)
                || (this.isOpponent(board, location.row + 1, i) && !this.isKing(board, location.row + 1, i)))){
            this.addMove(posMoves, location.row + 1, i)
        }

        i = location.col + 2
        if (this.isOnBoard(board, location.row - 1, i)
            && (!this.isOccupied(board, location.row - 1, i)
                || (this.isOpponent(board, location.row - 1, i) && !this.isKing(board, location.row - 1, i)))){
            this.addMove(posMoves, location.row - 1, i)
        }
        if (this.isOnBoard(board, location.row + 1, i)
            && (!this.isOccupied(board, location.row + 1, i)
                || (this.isOpponent(board, location.row + 1, i) && !this.isKing(board, location.row + 1, i)))){
            this.addMove(posMoves, location.row + 1, i)
        }

        return posMoves;
    }
}
