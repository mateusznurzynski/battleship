import PubSub from 'pubsub-js';
import { changeStatus, renderInitGameBoard } from './dom';
import Player from './factories/player';
import gameStart from './game-loop';

const HUMAN_SHIP_SIZES = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
const BOARD_SIZE = 10;

const humanPlayer = Player(true, BOARD_SIZE);

let currentShipSizeIndex = 0;
let currentShipSize = HUMAN_SHIP_SIZES[currentShipSizeIndex];
let currentShipDirection = 'right';

const initPubSub = () => {
  PubSub.subscribe('playerTileClicked', (msg, data) => {
    const shipAdded = humanPlayer.gameBoard.placeShip(
      data,
      currentShipSize,
      currentShipDirection
    );

    if (shipAdded) {
      currentShipSizeIndex += 1;
      currentShipSize = HUMAN_SHIP_SIZES[currentShipSizeIndex];
      renderInitGameBoard(
        humanPlayer.gameBoard,
        currentShipSize,
        currentShipDirection,
        BOARD_SIZE
      );
    }

    if (!currentShipSize) {
      PubSub.clearAllSubscriptions();
      gameStart(humanPlayer);
    }
  });
};

const initGame = () => {
  changeStatus('Place your ships');
  renderInitGameBoard(
    humanPlayer.gameBoard,
    currentShipSize,
    currentShipDirection,
    BOARD_SIZE
  );
  initPubSub();
};

export default initGame;
