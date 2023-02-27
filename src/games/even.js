import runGame from "../index.js";
import getRandomInt from "../randomNumber.js";

const evenGame = () => {
  const description =
    'Answer "yes" if the number is even, otherwise answer "no".';
  const getRoundData = () => {
    const randomNumber = getRandomInt(100);
    const rightAnswer = randomNumber % 2 === 0 ? "yes" : "no";
    return [randomNumber, rightAnswer];
  };

  runGame(description, getRoundData);
};
export default evenGame;
