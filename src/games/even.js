import runGame from '../index.js';
import getRandomNumber from '../lib.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const startGetEven = () => {
  const getRound = () => {
    const randomNumber = getRandomNumber(1, 100);
    const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
    return [randomNumber, rightAnswer];
  };

  runGame(description, getRound);
};
export default startGetEven;
