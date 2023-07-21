import './main.css';
import './img/background.jpg';
import GameBoard from './factories/game-board';
import renderGameBoards from './dom';

const BOARD_SIZE = 10;

const gameBoard = GameBoard(BOARD_SIZE);
const otherGameBoard = GameBoard(BOARD_SIZE);

renderGameBoards(gameBoard, otherGameBoard, BOARD_SIZE);
