import runGame from "../index.js";
import getRandomInt from "../randomNumber.js";

const description = "Find the greatest common divisor of given numbers.";

const getNod = (x, y) => {
  if (y > x) return getNod(y, x);
  if (!y) return x;
  return getNod(y, x % y);
};

const getRoundData = () => {
  const x = getRandomInt(1, 10);
  const y = getRandomInt(1, 10);
  const question = `${x} ${y}`;
  const rightAnswer = String(getNod(x, y));
  return [question, rightAnswer];
};

const gcdGame = () => runGame(description, getRoundData);
export default gcdGame;
