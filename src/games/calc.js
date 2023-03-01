import runGame from "../index.js";
import getRandomInt from "../randomNumber.js";

const description = "What is the result of the expression?";
const calculate = (randomNumber1, operator, randomNumber2) => {
  switch (operator) {
    case "*":
      return randomNumber1 * randomNumber2;
    case "+":
      return randomNumber1 + randomNumber2;
    case "-":
      return randomNumber1 - randomNumber2;
    default:
      throw new Error("Error!");
  }
};
const getRoundData = () => {
  const operations = ["+", "-", "*"];
  const randomNumber1 = getRandomInt(1, 100);
  const randomNumber2 = getRandomInt(1, 100);
  const operator = operations[Math.floor(Math.random() * operations.length)];
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const rightAnswer = String(calculate(randomNumber1, operator, randomNumber2));
  return [question, rightAnswer];
};

const calcGame = () => runGame(description, getRoundData);

export default calcGame;
