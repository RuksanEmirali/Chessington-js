import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import Rook from '../../../src/engine/pieces/rook';

describe('King', () => {

    let board;
    beforeEach(() => board = new Board());

    it('can move to adjacent squares', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(3, 4), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(2, 3), Square.at(2, 4), Square.at(2, 5), Square.at(3, 5),
            Square.at(4, 5), Square.at(4, 4), Square.at(4, 3), Square.at(3, 3)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('cannot make any other moves', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(3, 4), king);

        const moves = king.getAvailableMoves(board);

        moves.should.have.length(8);
    });

    it('cannot leave the board', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(0, 0), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [Square.at(0, 1), Square.at(1, 1), Square.at(1, 0)];

        moves.should.deep.have.members(expectedMoves);
    });

    it('cannot take a friendly piece', () => {
        const king = new King(Player.BLACK);
        const friendlyPiece = new Rook(Player.BLACK);
        board.setPiece(Square.at(4, 4), king);
        board.setPiece(Square.at(3, 3), friendlyPiece);

        const moves = king.getAvailableMoves(board);

        moves.should.not.deep.include(Square.at(3, 3));
    });

    it('can take an opponents piece', () => {
        const king = new King(Player.BLACK);
        const opponentPiece = new Rook(Player.WHITE);
        board.setPiece(Square.at(4, 4), king);
        board.setPiece(Square.at(3, 3), opponentPiece);

        const moves = king.getAvailableMoves(board);

        moves.should.deep.include(Square.at(3, 3));
    });

    it('cannot take the opposing king', () => {
        const king = new King(Player.BLACK);
        const opposingKing = new King(Player.WHITE);
        board.setPiece(Square.at(4, 4), king);
        board.setPiece(Square.at(3, 3), opposingKing);

        const moves = king.getAvailableMoves(board);

        moves.should.not.deep.include(Square.at(3, 3));
    });
});
