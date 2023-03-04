import runGame from '../index.js';
import getRandomNumber from '../lib.js';

const description = 'What number is missing in the progression?';

const getProgression = (number1, step, length) => {
  const arrProgressive = [];
  for (let i = 1; i < length; i += 1) {
    const result = number1 + step * i;
    arrProgressive.push(result);
  }
  return arrProgressive;
};

const getRoundData = () => {
  const progressionLength = getRandomNumber(6, 10);
  const number1 = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progression = getProgression(number1, step, progressionLength);
  const lastIndex = progression.length - 1;
  const randomIndex = getRandomNumber(0, lastIndex);
  const rightAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};
const progressionGame = () => runGame(description, getRoundData);
export default progressionGame;
