import PubSub from 'pubsub-js';

const gameBoardsElement = document.querySelector('.gameboards');
const statusElement = document.querySelector('.status');

const handleEnemyTileClick = (e) => {
  PubSub.publish('enemyTileClicked', {
    row: e.target.getAttribute('data-row'),
    column: e.target.getAttribute('data-column'),
  });
};

const toggleTileEventListeners = (boolean) => {
  const enemyTiles = gameBoardsElement.querySelectorAll(
    '.gameboard-computer > .tile'
  );
  if (boolean) {
    enemyTiles.forEach((tile) => {
      tile.addEventListener('click', handleEnemyTileClick);
    });
  } else {
    enemyTiles.forEach((tile) => {
      tile.removeEventListener('click', handleEnemyTileClick);
    });
  }
};

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

const createTileElement = (tile, showShips = false) => {
  const tileElement = createDomElement('div', 'tile');
  tileElement.setAttribute('data-row', tile.row);
  tileElement.setAttribute('data-column', tile.column);

  if (tile.attacked) {
    tileElement.toggleAttribute('attacked', true);
    if (tile.ship) {
      tileElement.setAttribute('ship', 'attacked');
      if (tile.ship.sunk) {
        tileElement.setAttribute('ship', 'destroyed');
      }
    }
  } else if (showShips) {
    if (tile.ship) {
      tileElement.setAttribute('ship', 'alive');
    }
  }
  return tileElement;
};

const changeStatus = (statusMessage) => {
  statusElement.innerText = statusMessage;
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
    const tileElement = createTileElement(tile, true);
    playerGameBoardElement.appendChild(tileElement);
  });

  const computerGameBoardElement = createDomElement(
    'div',
    'gameboard gameboard-computer'
  );
  computerTiles.forEach((tile) => {
    const tileElement = createTileElement(tile, true);
    // for now the player can see all ships
    computerGameBoardElement.appendChild(tileElement);
  });

  playerGameBoardElement.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  computerGameBoardElement.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  gameBoardsElement.appendChild(playerGameBoardElement);
  gameBoardsElement.appendChild(computerGameBoardElement);
};

const renderInitGameBoard = (
  gameBoard,
  placedShipSize,
  placedShipDirection,
  gridSize
) => {
  gameBoardsElement.innerHTML = '';
  const playerTiles = gameBoard.tiles;
  const playerGameBoardElement = createDomElement(
    'div',
    'gameboard gameboard-player gameboard-init'
  );
  const shipHighlightElement = createDomElement('div', 'highlight');

  playerTiles.forEach((tile) => {
    const tileElement = createTileElement(tile, true);
    tileElement.addEventListener('mouseenter', () => {
      tileElement.toggleAttribute('placing', true);
      const highlight = shipHighlightElement.cloneNode(true);
      if (placedShipDirection === 'right') {
        highlight.style.width = `calc(var(--tile-size)*${placedShipSize})`;
      } else if (placedShipDirection === 'down') {
        highlight.style.height = `calc(var(--tile-size)*${placedShipSize})`;
      }
      tileElement.appendChild(highlight);
    });
    tileElement.addEventListener('mouseleave', () => {
      tileElement.toggleAttribute('placing', false);
      tileElement.innerHTML = '';
    });

    tileElement.addEventListener('click', () => {
      PubSub.publish('playerTileClicked', [tile.row, tile.column]);
    });
    playerGameBoardElement.appendChild(tileElement);
  });

  gameBoardsElement.appendChild(playerGameBoardElement);
  playerGameBoardElement.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
};

export {
  renderGameBoards,
  toggleTileEventListeners,
  changeStatus,
  renderInitGameBoard,
};
