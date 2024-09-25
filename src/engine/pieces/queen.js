import Piece from './piece';
import Player from '../player';
import Square from '../square';
import GameSettings from '../gameSettings';
import King from './king';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }
    
    addMove(posMoves, x, y){
        posMoves.push(Square.at(x, y))
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
        let location = board.findPiece(this)
        let posMoves = []
        for (let i = location.col-1; i>= 0 ; i--) {
            if (this.isOccupied(board, location.row, i)){
                if (this.isOpponent(board, location.row, i) && !this.isKing(board, location.row, i)){
                    this.addMove(posMoves, location.row, i)
                }
                break
            } else {
                this.addMove(posMoves, location.row, i)
            }
        }
        for (let i = location.col + 1; i< GameSettings.BOARD_SIZE; i++) {
            if (this.isOccupied(board, location.row, i)){
                if (this.isOpponent(board, location.row, i) && !this.isKing(board, location.row, i)){
                    this.addMove(posMoves, location.row, i)
                }
                break
            } else {
                this.addMove(posMoves, location.row, i)
            }
        }
        for (let i = location.row-1; i>=0 ; i--) {
            if (this.isOccupied(board, i, location.col)){
                if (this.isOpponent(board, i, location.col) && !this.isKing(board, location.row, i)){
                    this.addMove(posMoves, i, location.col)
                }
                break
            } else {
                this.addMove(posMoves, i, location.col)
            }
        }
        for (let i = location.row + 1; i< GameSettings.BOARD_SIZE; i++) {
            if (this.isOccupied(board, i, location.col)){
                if (this.isOpponent(board, i, location.col) && !this.isKing(board, location.row, i)){
                    this.addMove(posMoves, i, location.col)
                }
                break
            } else {
                this.addMove(posMoves, i, location.col)
            }
        }
        return posMoves;
    }
}
