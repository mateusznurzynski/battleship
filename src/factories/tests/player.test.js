import Player from '../player';

describe('Computer-player', () => {
  test('should be able to pick a random move from given possibilities', () => {
    const player = Player(false);
    const moves = [
      [2, 1],
      [2, 2],
      [2, 3],
    ];

    const chosenMove = player.chooseRandomAttack(moves);
    expect(moves).toContainEqual(chosenMove);
  });
});
