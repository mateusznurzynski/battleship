import PubSub from 'pubsub-js';
import Player from './factories/player';
import { renderGameBoards, toggleTileEventListeners } from './dom';

const BOARD_SIZE = 10;

let playerTurn = false;

const humanPlayer = Player(true, BOARD_SIZE);
const computerPlayer = Player(false, BOARD_SIZE);

const populateBoards = () => {
  // this function is just for testing purposes
  const predeterminedCoordinates = [
    [1, 1],
    [2, 5],
    [6, 2],
  ];

  predeterminedCoordinates.forEach((coordinates) => {
    humanPlayer.gameBoard.placeShip(coordinates, 3, 'right');
    computerPlayer.gameBoard.placeShip(coordinates, 3, 'right');
  });
};

const changeTurn = () => {
  playerTurn = !playerTurn;

  toggleTileEventListeners(playerTurn);
  return playerTurn;
};

const performComputerTurn = () => {
  const computerMove = computerPlayer.performRandomAttack(humanPlayer);
  PubSub.publish('computerAttacked', computerMove);
};

const tryToAttack = (msg, data) => {
  if (!playerTurn) {
    return false;
  }
  const attacked = computerPlayer.gameBoard.receiveHit([data.row, data.column]);
  if (attacked) {
    PubSub.publish('userAttacked', [data.row, data.column]);
  }

  return attacked;
};

const gameStart = () => {
  populateBoards();
  renderGameBoards(humanPlayer.gameBoard, computerPlayer.gameBoard);
  toggleTileEventListeners(true);
  PubSub.subscribe('enemyTileClicked', tryToAttack);
  PubSub.subscribe('userAttacked', () => {
    renderGameBoards(humanPlayer.gameBoard, computerPlayer.gameBoard);
    changeTurn();
    performComputerTurn();
  });
  PubSub.subscribe('computerAttacked', () => {
    renderGameBoards(humanPlayer.gameBoard, computerPlayer.gameBoard);
    changeTurn();
  });
  playerTurn = true;
};

export default gameStart;
