const gameBoardsElement = document.querySelector('.gameboards');

const createDomElement = (
  elementType = 'div',
  classesString = '',
  innerHTML = ''
) => {
  const element = document.createElement(elementType);
  element.className = classesString;
  element.innerHTML = innerHTML;

  return element;
};

const renderGameBoards = (playerBoard, computerBoard, gridSize = 10) => {
  gameBoardsElement.innerHTML = '';
  const playerTiles = playerBoard.tiles;
  const computerTiles = computerBoard.tiles;

  const playerGameBoardElement = createDomElement(
    'div',
    'gameboard gameboard-player'
  );
  playerTiles.forEach((tile) => {
    const tileElement = createDomElement('div', 'tile');
    tileElement.setAttribute('data-row', tile.row);
    tileElement.setAttribute('data-column', tile.column);
    playerGameBoardElement.appendChild(tileElement);
  });

  const computerGameBoardElement = createDomElement(
    'div',
    'gameboard gameboard-computer'
  );
  computerTiles.forEach((tile) => {
    const tileElement = createDomElement('div', 'tile');
    tileElement.setAttribute('data-row', tile.row);
    tileElement.setAttribute('data-column', tile.column);
    computerGameBoardElement.appendChild(tileElement);
  });

  playerGameBoardElement.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  computerGameBoardElement.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  gameBoardsElement.appendChild(playerGameBoardElement);
  gameBoardsElement.appendChild(computerGameBoardElement);
};

export default renderGameBoards;
