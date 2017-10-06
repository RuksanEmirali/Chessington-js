import Piece from './piece';
import Player from '../player';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let posMoves = []
        for (let i = 0; i< location.col; i++) {
            posMoves.push(Square.at(location.row, i))
        }
        for (let i = location.col + 1; i< GameSettings.BOARD_SIZE; i++) {
            posMoves.push(Square.at(location.row, i))
        }
        for (let i = 0; i< location.row; i++) {
            posMoves.push(Square.at(i, location.col))
        }
        for (let i = location.row + 1; i< GameSettings.BOARD_SIZE; i++) {
            posMoves.push(Square.at(i, location.col))
        }
        return posMoves;
    }
}
