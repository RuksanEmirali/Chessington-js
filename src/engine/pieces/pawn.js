import Player from '../player';
import Square from '../square';
import Piece from './piece';
import GameSettings from '../gameSettings';
import King from './king';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    addMove(posMoves, x, y){
        posMoves.push(Square.at(x, y))
    }

    isEmpty(board, x, y){
        return board.getPiece(Square.at(x, y)) === undefined
    }

    isOccupied(board, x, y){
        return board.getPiece(Square.at(x, y)) !== undefined
    }

    checkPiece(board, x, y) {
        return board.getPiece(Square.at(x, y))
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
        if (this.player === Player.WHITE) {
            if(location.row < GameSettings.BOARD_SIZE-1) {
                if (this.isEmpty(board, location.row + 1, location.col)) {
                    this.addMove(posMoves, location.row + 1, location.col)
                }
                if (location.row === 1 
                    && this.isEmpty(board, location.row + 1, location.col)
                    && this.isEmpty(board, location.row + 2, location.col)) {
                    this.addMove(posMoves, location.row + 2, location.col)
                }
                if (this.isOccupied(board, location.row + 1, location.col + 1)) {
                    if(this.isOpponent(board, location.row + 1, location.col + 1)){
                        if(!this.isKing(board, location.row + 1, location.col + 1)){
                            this.addMove(location.row + 1, location.col + 1)    
                        }
                    }
                }
                if (this.isOccupied(board, location.row + 1, location.col - 1)) {
                    if (this.isOpponent(board, location.row + 1, location.col - 1)) {
                        if (!this.isKing(board, location.row + 1, location.col - 1)) {
                            this.addMove(posMoves, location.row + 1, location.col - 1)
                        }
                    }
                }
            }
        } else {
            if (location.row > 0) {
                if (this.isEmpty(board, location.row - 1, location.col) ){
                    this.addMove(posMoves, location.row - 1, location.col)
                }
                if (location.row === GameSettings.BOARD_SIZE-2 
                    && this.isEmpty(board, location.row - 1, location.col)
                    && this.isEmpty(board, location.row - 2, location.col)) {
                    this.addMove(posMoves, location.row - 2, location.col)
                }
                if (this.isOccupied(board, location.row - 1, location.col + 1)) {
                    if (this.isOpponent(board, location.row - 1, location.col + 1)) {
                        if (!this.isKing(board, location.row - 1, location.col + 1)) {
                            this.addMove(posMoves, location.row - 1, location.col + 1)
                        }
                    }
                }
                if (this.isOccupied(board, location.row - 1, location.col - 1)) {
                    if (this.isOpponent(board, location.row - 1, location.col - 1)) {
                        if (!this.isKing(board, location.row - 1, location.col - 1)) {
                            this.addMove(posMoves, location.row - 1, location.col - 1)
                        }
                    }
                }
            }
        }
        return posMoves
    }
}
