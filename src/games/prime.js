import runGame from "../index.js";
import { getRandomNum } from "../randomNumber.js";

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getRoundData = () => {
  const question = getRandomNum(1, 10);
  const rightAnswer = getPrime(question) ? "yes" : "no";
  return [question, rightAnswer];
};
const primeGame = () => runGame(description, getRoundData);
export default primeGame;
