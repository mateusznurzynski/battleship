import Player from './factories/player';
import renderGameBoards from './dom';

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

const gameStart = () => {
  populateBoards();
  renderGameBoards(humanPlayer.gameBoard, computerPlayer.gameBoard);
  playerTurn = !playerTurn;
};

export default gameStart;
