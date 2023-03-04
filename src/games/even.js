import runGame from '../index.js';
import getRandomNumber from '../lib.js';

const evenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (randomNum) => randomNum % 2 === 0;
  const getRoundData = () => {
    const randomNumber = getRandomNumber(1, 100);
    const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
    return [randomNumber, rightAnswer];
  };

  runGame(description, getRoundData);
};
export default evenGame;
