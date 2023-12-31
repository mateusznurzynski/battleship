import Ship from './ship';

const Tile = (row, column, ship = null) => {
  if (!row || !column) {
    throw Error('Invalid coordinates!');
  }
  return { row, column, ship, attacked: false };
};

const GameBoard = (size = 10) => {
  const tiles = [];
  let currentRow = 1;
  let currentColumn = 1;
  for (let i = 0; i < size * size; i += 1) {
    tiles.push(Tile(currentRow, currentColumn));
    if (currentColumn < size) {
      currentColumn += 1;
    } else {
      currentColumn = 1;
      currentRow += 1;
    }
  }

  const getShipCoordinates = (head, shipSize, direction) => {
    const coordinates = [[...head]];
    const currentCoordinates = [...head];
    for (let i = 0; i < shipSize - 1; i += 1) {
      switch (direction) {
        case 'up':
          currentCoordinates[0] -= 1;
          coordinates.push([...currentCoordinates]);
          break;
        case 'right':
          currentCoordinates[1] += 1;
          coordinates.push([...currentCoordinates]);
          break;
        case 'down':
          currentCoordinates[0] += 1;
          coordinates.push([...currentCoordinates]);
          break;
        case 'left':
          currentCoordinates[1] -= 1;
          coordinates.push([...currentCoordinates]);
          break;
        default:
          break;
      }
    }
    return coordinates;
  };

  const validateCoordinates = (coordinate, boardSize) => {
    const valid =
      coordinate[0] >= 1 &&
      coordinate[0] <= boardSize &&
      coordinate[1] >= 1 &&
      coordinate[1] <= boardSize;

    return valid;
  };

  return {
    tiles,
    size,
    attackedCoordinates: [],
    ships: [],

    getAdjacentCoordinates(coordinates) {
      const allAdjacentCoordinates = [
        [coordinates[0] - 1, coordinates[1]],
        [coordinates[0] - 1, coordinates[1] + 1],
        [coordinates[0], coordinates[1] + 1],
        [coordinates[0] + 1, coordinates[1] + 1],
        [coordinates[0] + 1, coordinates[1]],
        [coordinates[0] + 1, coordinates[1] - 1],
        [coordinates[0], coordinates[1] - 1],
        [coordinates[0] - 1, coordinates[1] - 1],
      ];

      const validAdjacentCoordinates = allAdjacentCoordinates.filter(
        (coordinate) => validateCoordinates(coordinate, this.size)
      );

      return validAdjacentCoordinates;
    },

    checkForAdjacentShips(coordinates) {
      const adjacentCoordinates = this.getAdjacentCoordinates(coordinates);
      const isShipAdjacent = adjacentCoordinates.some((coordinate) => {
        const tile = this.findTile(coordinate);
        if (tile.ship) {
          return true;
        }
        return false;
      });

      return isShipAdjacent;
    },

    validateShipCoordinates(coordinates) {
      let valid = true;
      coordinates.forEach((coordinate) => {
        if (
          !validateCoordinates(coordinate, this.size) ||
          this.checkForAdjacentShips(coordinate) ||
          this.findTile(coordinate).ship
        ) {
          valid = false;
        }
      });

      return valid;
    },

    findTile(coordinates) {
      const tileIndex = (coordinates[0] - 1) * this.size + (coordinates[1] - 1);
      const tile = this.tiles[tileIndex];

      return tile;
    },

    placeShip(headCoordinates, shipSize, direction) {
      if (shipSize < 1) {
        return false;
      }
      const coordinates = getShipCoordinates(
        headCoordinates,
        shipSize,
        direction
      );
      if (!this.validateShipCoordinates(coordinates)) {
        return false;
      }
      const newShip = Ship(shipSize);
      this.ships.push(newShip);

      coordinates.forEach((coordinate) => {
        const tile = this.findTile(coordinate);
        tile.ship = newShip;
      });
      return true;
    },

    placeShipRandomly(shipSize, direction) {
      const remainingTiles = [...tiles];
      let chosenCoordinates;

      while (remainingTiles.length > 0 && !chosenCoordinates) {
        const index = Math.floor(Math.random() * remainingTiles.length);
        const headCoordinates = [
          remainingTiles[index].row,
          remainingTiles[index].column,
        ];
        const fullCoordinates = getShipCoordinates(
          headCoordinates,
          shipSize,
          direction
        );
        const valid = this.validateShipCoordinates(fullCoordinates);

        if (valid) {
          chosenCoordinates = headCoordinates;
        } else {
          remainingTiles.splice(index, 1);
        }
      }

      this.placeShip(chosenCoordinates, shipSize, direction);
      return chosenCoordinates;
    },

    validateHit(coordinates) {
      if (!validateCoordinates(coordinates, this.size)) {
        return false;
      }
      const alreadyHit = this.attackedCoordinates.some(
        (coord) => coord[0] === coordinates[0] && coord[1] === coordinates[1]
      );
      if (alreadyHit) {
        return false;
      }

      return true;
    },

    receiveHit(coordinates) {
      if (!this.validateHit(coordinates)) {
        return false;
      }
      this.attackedCoordinates.push(coordinates);

      const tile = this.findTile(coordinates);
      tile.attacked = true;
      if (!tile.ship) {
        return true;
      }
      tile.ship.hit();
      return true;
    },

    isEverythingSunk() {
      if (this.ships.length <= 0) {
        return true;
      }

      const shipRemaining = this.ships.some((ship) => !ship.sunk);
      return !shipRemaining;
    },
  };
};

export default GameBoard;
