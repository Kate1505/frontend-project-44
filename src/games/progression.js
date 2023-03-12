import runGame from '../index.js';
import getRandomNumber from '../lib.js';

const description = 'What number is missing in the progression?';

const getProgression = (firstNumber, step, length) => {
  const array = [];
  for (let i = 1; i < length; i += 1) {
    const result = firstNumber + step * i;
    array.push(result);
  }
  return array;
};

const getRound = () => {
  const progressionLength = getRandomNumber(6, 10);
  const firstNumber = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progression = getProgression(firstNumber, step, progressionLength);
  const lastIndex = progression.length - 1;
  const randomIndex = getRandomNumber(0, lastIndex);
  const rightAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};
const startProgressionGame = () => runGame(description, getRound);
export default startProgressionGame;
