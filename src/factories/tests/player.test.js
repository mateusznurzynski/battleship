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

  test('should modify possible moves after random attacks', () => {
    const player = Player(false);
    const enemyPlayer = Player(true);
    player.performRandomAttack(enemyPlayer);

    expect(player.targetedCoordinates.length).toBe(1);
    const chosenMove = player.targetedCoordinates[0];

    expect(
      player.possibleTargets.some((target) => {
        return target[0] === chosenMove[0] && target[1] === chosenMove[1];
      })
    ).toBeFalsy();
  });
});
