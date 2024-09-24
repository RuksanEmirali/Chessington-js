import Piece from './piece';
import GameSettings from '../gameSettings';
import Square from '../square';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    addMove(posMoves, x, y){
        posMoves.push(Square.at(x, y))
    }

    isOccupied(board, x, y){
        return board.getPiece(Square.at(x, y)) !== undefined
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let posMoves = []
        let i = location.row + 1
        let j = location.col + 1
        while (i < GameSettings.BOARD_SIZE && j < GameSettings.BOARD_SIZE){
            if (this.isOccupied(board, i, j)){
                break
            } else {
                this.addMove(posMoves, i, j)
                i++
                j++
            }
        }
        i = location.row - 1
        j = location.col - 1
        while (i >= 0 && j >= 0){
            if (this.isOccupied(board, i, j)){
                break
            } else {
                this.addMove(posMoves, i, j)
                i--
                j--
            }
        }
        i = location.row - 1
        j = location.col + 1
        while (i >= 0 && j < GameSettings.BOARD_SIZE){
            if (this.isOccupied(board, i, j)){
                break
            } else {
                this.addMove(posMoves, i, j)
                i--
                j++
            }
        }
        i = location.row + 1
        j = location.col - 1
        while (i < GameSettings.BOARD_SIZE && j >=0){
            if (this.isOccupied(board, i, j)){
                break
            } else {
                this.addMove(posMoves, i, j)
                i++
                j--
            }
        }
        return posMoves;
    }
}
