import runGame from '../index.js';
import getRandomNumber from '../lib.js';

const description = 'What is the result of the expression?';
const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '*':
      return number1 * number2;
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};
const getRound = () => {
  const operations = ['+', '-', '*'];
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const lastIndexOperations = operations.length - 1;
  const operator = operations[getRandomNumber(0, lastIndexOperations)];
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const rightAnswer = String(calculate(randomNumber1, operator, randomNumber2));
  return [question, rightAnswer];
};

const startCalcGame = () => runGame(description, getRound);

export default startCalcGame;
