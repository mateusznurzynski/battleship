import PubSub from 'pubsub-js';
import Player from './factories/player';
import {
  renderGameBoards,
  toggleTileEventListeners,
  changeStatus,
} from './dom';

const BOARD_SIZE = 10;
const TURN_DELAY = 1000; // in ms
const COMPUTER_SHIP_SIZES = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

let playerTurn = false;

let humanPlayer;
const computerPlayer = Player(false, BOARD_SIZE);

const populateComputerBoard = () => {
  COMPUTER_SHIP_SIZES.forEach((size) => {
    const direction = ['down', 'right'][Math.floor(Math.random() * 2)];
    computerPlayer.gameBoard.placeShipRandomly(size, direction);
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
  changeStatus(`It's ${playerTurn ? 'your' : "the computer's"} turn!`);

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
  changeStatus(`Game ended! Winner: ${winner}`);
};

const initPubSub = () => {
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
};

const gameStart = (newHumanPlayer) => {
  humanPlayer = newHumanPlayer;
  populateComputerBoard();
  initPubSub();
  renderGameBoards(humanPlayer.gameBoard, computerPlayer.gameBoard);
  toggleTileEventListeners(true);

  changeTurn();
};

export default gameStart;
