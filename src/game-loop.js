import PubSub from 'pubsub-js';
import Player from './factories/player';
import { renderGameBoards, toggleTileEventListeners } from './dom';

const BOARD_SIZE = 10;
const TURN_DELAY = 200; // in ms

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

const checkWinCondition = () => {
  if (humanPlayer.gameBoard.isEverythingSunk()) {
    PubSub.publish('gameEnded', { winner: 'computer' });
    return true;
  }
  if (computerPlayer.gameBoard.isEverythingSunk()) {
    PubSub.publish('gameEnded', { winner: 'player' });
    return true;
  }

  return false;
};

const changeTurn = () => {
  if (checkWinCondition()) {
    playerTurn = false;
    toggleTileEventListeners(false);
    return false;
  }
  playerTurn = !playerTurn;

  toggleTileEventListeners(playerTurn);
  return playerTurn;
};

const performComputerTurn = (delay = 1000) => {
  if (!playerTurn) {
    setTimeout(() => {
      const computerMove = computerPlayer.performRandomAttack(humanPlayer);
      PubSub.publish('computerAttacked', computerMove);
    }, delay);
  }
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

const gameEnd = ({ winner }) => {
  console.log(`${winner} won!`);
};

const gameStart = () => {
  populateBoards();
  renderGameBoards(humanPlayer.gameBoard, computerPlayer.gameBoard);
  toggleTileEventListeners(true);
  PubSub.subscribe('enemyTileClicked', tryToAttack);
  PubSub.subscribe('userAttacked', () => {
    renderGameBoards(humanPlayer.gameBoard, computerPlayer.gameBoard);
    changeTurn();
    performComputerTurn(TURN_DELAY);
  });
  PubSub.subscribe('computerAttacked', () => {
    renderGameBoards(humanPlayer.gameBoard, computerPlayer.gameBoard);
    changeTurn();
  });
  PubSub.subscribe('gameEnded', (msg, data) => {
    PubSub.clearAllSubscriptions();
    gameEnd(data);
  });
  playerTurn = true;
};

export default gameStart;
