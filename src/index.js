import './main.css';
import './img/background.jpg';
import GameBoard from './factories/game-board';

const gameBoard = GameBoard(10);
gameBoard.placeShip([2, 11]);
