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

// const isEven = (randomNum) => randomNum % 2 === 0;

// const getRoundData = () => {
//   const randomNumber = getRandomNumber(1, 20);
//   const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
//   return [randomNumber, correctAnswer];
// };
// const startGame = () => gameRounds(description, getRoundData);

// export default startGame;
