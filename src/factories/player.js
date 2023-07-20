import GameBoard from './game-board';

const getRandomInt = (max) => Math.floor(Math.random() * max);

const Player = (isHuman, name = 'Player') => {
  const gameBoard = GameBoard(10);
  return {
    isHuman,
    name,
    gameBoard,
    targetedCoordinates: [],

    chooseRandomAttack(possibleTargets) {
      if (possibleTargets.length <= 0) {
        return false;
      }
      const index = getRandomInt(possibleTargets.length);
      const attackCoordinates = possibleTargets[index];

      return attackCoordinates;
    },
  };
};

export default Player;
