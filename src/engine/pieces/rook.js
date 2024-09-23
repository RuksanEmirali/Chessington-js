import Piece from './piece';
import Player from '../player';
import Square from '../square';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    addMove(posMoves, x, y){
        posMoves.push(Square.at(x, y))
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let posMoves = []
        for (let i = 0; i< location.col; i++) {
            this.addMove(posMoves, location.row, i)
        }
        for (let i = location.col + 1; i< GameSettings.BOARD_SIZE; i++) {
            this.addMove(posMoves, location.row, i)
        }
        for (let i = 0; i< location.row; i++) {
            this.addMove(posMoves, i, location.col)
        }
        for (let i = location.row + 1; i< GameSettings.BOARD_SIZE; i++) {
            this.addMove(posMoves, i, location.col)
        }
        return posMoves;
    }
}
