import Ship from '../../factories/ship';

describe('Ship', () => {
  test('should increase the number of hits', () => {
    const ship = Ship(4);
    ship.hit();
    expect(ship.timesHit).toBe(1);

    ship.hit();
    ship.hit();
    expect(ship.timesHit).toBe(3);
  });
  test('should know when its sunk', () => {
    const ship = Ship(2);
    ship.hit();
    expect(ship.sunk).toBe(false);

    ship.hit();
    expect(ship.sunk).toBe(true);
  });
});
