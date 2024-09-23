import Player from '../player';
import Square from '../square';
import Piece from './piece';
import Board from '../board';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let posMoves = []
        if (this.player === Player.WHITE) {
            if (board.getPiece(Square.at(location.row + 1, location.col)) === undefined) {
                posMoves.push(Square.at(location.row + 1, location.col))
            }
            if (location.row === 1 
                && board.getPiece(Square.at(location.row + 1, location.col)) === undefined
                && board.getPiece(Square.at(location.row + 2, location.col)) === undefined) {
                posMoves.push(Square.at(location.row + 2, location.col))
            }
        } else {
            if (board.getPiece(Square.at(location.row - 1, location.col)) === undefined){
                posMoves.push(Square.at(location.row - 1, location.col))
            }
            if (location.row === 6 
                && board.getPiece(Square.at(location.row - 1, location.col)) === undefined
                && board.getPiece(Square.at(location.row - 2, location.col)) === undefined) {
                posMoves.push(Square.at(location.row - 2, location.col))
            }
        }
        return posMoves
    }
}
