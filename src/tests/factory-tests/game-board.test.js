import GameBoard from '../../factories/game-board';

describe('GameBoard', () => {
  test('should create a specified number of tiles', () => {
    const gameBoard = GameBoard(10);

    expect(gameBoard.tiles.length).toBe(100);
  });
  describe('ship placement', () => {
    test('should find a tile with specified coordinates', () => {
      const gameBoard = GameBoard(10);

      const tile = gameBoard.findTile([2, 5]);
      expect(tile.row).toBe(2);
      expect(tile.column).toBe(5);
    });

    test('should place ships at specified coordinates', () => {
      const gameBoard = GameBoard();
      gameBoard.placeShip([2, 5], 3, 'right');

      const shipCoordinates = [
        [2, 5],
        [2, 6],
        [2, 7],
      ];
      shipCoordinates.forEach((coordinate) => {
        const tile = gameBoard.findTile(coordinate);
        expect(tile.ship).toBeTruthy();
      });
    });

    test('should place ships at specified coordinates', () => {
      const gameBoard = GameBoard();
      gameBoard.placeShip([2, 5], 3, 'down');

      const shipCoordinates = [
        [2, 5],
        [3, 5],
        [4, 5],
      ];
      shipCoordinates.forEach((coordinate) => {
        const tile = gameBoard.findTile(coordinate);
        expect(tile.ship).toBeTruthy();
      });
    });

    test('should place ships at specified coordinates', () => {
      const gameBoard = GameBoard();
      gameBoard.placeShip([2, 5], 3, 'left');

      const shipCoordinates = [
        [2, 5],
        [2, 4],
        [2, 3],
      ];
      shipCoordinates.forEach((coordinate) => {
        const tile = gameBoard.findTile(coordinate);
        expect(tile.ship).toBeTruthy();
      });
    });

    test('should place ships at specified coordinates', () => {
      const gameBoard = GameBoard();
      gameBoard.placeShip([3, 5], 3, 'up');

      const shipCoordinates = [
        [3, 5],
        [2, 5],
        [1, 5],
      ];
      shipCoordinates.forEach((coordinate) => {
        const tile = gameBoard.findTile(coordinate);
        expect(tile.ship).toBeTruthy();
      });
    });

    test('should not place ships at invalid coordinates', () => {
      const gameBoard = GameBoard();
      gameBoard.placeShip([2, 9], 3, 'right');

      const tile = gameBoard.findTile([2, 9]);
      expect(tile.ship).toBeNull();
    });

    test('should not place ships on top of other ships', () => {
      const gameBoard = GameBoard();
      gameBoard.placeShip([2, 5], 3, 'right');
      gameBoard.placeShip([2, 4], 3, 'right');

      const tile = gameBoard.findTile([2, 5]);
      const invalidTile = gameBoard.findTile([2, 4]);
      expect(tile.ship).toBeTruthy();
      expect(invalidTile.ship).toBeNull();
    });

    test('should not place ships right next to other ships', () => {
      const gameBoard = GameBoard();
      gameBoard.placeShip([2, 5], 3, 'right');
      gameBoard.placeShip([3, 5], 3, 'right');

      const tile = gameBoard.findTile([2, 5]);
      const invalidTile = gameBoard.findTile([3, 5]);
      expect(tile.ship).toBeTruthy();
      expect(invalidTile.ship).toBeNull();
    });
  });

  describe('receiving attacks', () => {
    test('should be able to receive attacks (hit)', () => {
      const gameBoard = GameBoard();
      gameBoard.placeShip([2, 5], 3, 'right');
      gameBoard.receiveHit([2, 6]);

      const ship = gameBoard.findTile([2, 5]).ship;
      expect(ship.timesHit).toBe(1);
    });

    test('should be able to receive attacks (miss)', () => {
      const gameBoard = GameBoard();
      gameBoard.placeShip([2, 5], 3, 'right');
      gameBoard.receiveHit([2, 4]);

      const ship = gameBoard.findTile([2, 5]).ship;
      expect(ship.timesHit).toBe(0);
      expect(gameBoard.attackedCoordinates[0]).toEqual([2, 4]);
    });

    test('should not be able to receive attacks on the same tile twice', () => {
      const gameBoard = GameBoard();
      gameBoard.placeShip([2, 5], 3, 'right');
      gameBoard.receiveHit([2, 6]);

      expect(gameBoard.receiveHit([2, 6])).toBeFalsy();
    });

    test('should be able to tell if all the ships are sunk', () => {
      const gameBoard = GameBoard();
      expect(gameBoard.isEverythingSunk()).toBeTruthy();
      gameBoard.placeShip([1, 5], 3, 'right');
      gameBoard.placeShip([3, 5], 3, 'left');
      gameBoard.receiveHit([1, 5]);
      gameBoard.receiveHit([1, 6]);
      gameBoard.receiveHit([1, 7]);
      gameBoard.receiveHit([3, 5]);
      gameBoard.receiveHit([3, 4]);
      expect(gameBoard.isEverythingSunk()).toBeFalsy();
      gameBoard.receiveHit([3, 3]);

      expect(gameBoard.isEverythingSunk()).toBeTruthy();
    });
  });
});
