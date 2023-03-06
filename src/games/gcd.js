import runGame from '../index.js';
import getRandomNumber from '../lib.js';

const description = 'Find the greatest common divisor of given numbers.';

const getNod = (x, y) => {
  if (y > x) return getNod(y, x);
  if (!y) return x;
  return getNod(y, x % y);
};

const getRound = () => {
  const x = getRandomNumber(1, 10);
  const y = getRandomNumber(1, 10);
  const question = `${x} ${y}`;
  const rightAnswer = String(getNod(x, y));
  return [question, rightAnswer];
};

const gcdGame = () => runGame(description, getRound);
export default gcdGame;
