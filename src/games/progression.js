import runGame from "../index.js";
import getRandomInt from "../randomNumber.js";

const description = "What number is missing in the progression?";

const getProgression = (num1, step, arrProgresLength) => {
  const arrProgressive = [];
  for (let i = 1; i < arrProgresLength; i += 1) {
    const result = num1 + step * i;
    arrProgressive.push(result);
  }
  return arrProgressive;
};

const getRoundData = () => {
  const arrProgresLength = getRandomInt(6, 10);
  const num1 = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const progression = getProgression(num1, step, arrProgresLength);
  const lastIndex = arrProgresLength - 1;
  const randomIndex = getRandomInt(0, lastIndex);
  const rightAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = "..";
  const question = progression.join(" ");
  return [question, rightAnswer];
};
const progressionGame = () => runGame(description, getRoundData);
export default progressionGame;
