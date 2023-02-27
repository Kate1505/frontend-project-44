import readlineSync from "readline-sync";

const evenGame = () => {
  console.log("Welcome to the Brain Games!");

  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomInt = (max) => {
    const roundsCount = 3;
    for (let i = 0; i < roundsCount; i += 1) {
      const randomNumber = Math.floor(Math.random() * max);
      console.log(`Question: ${randomNumber}`);
      const answer = readlineSync.question("Your answer: ");
      const rightAnswer = randomNumber % 2 === 0 ? "yes" : "no";

      if (answer !== rightAnswer) {
        console.log(
          `"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`
        );
        console.log(`Let's try again, ${userName}!`);
        return;
      }
      console.log("Correct!");
      console.log(`Congratulations, ${userName}!`);
    }
  };
  getRandomInt(100);
};
export default evenGame;
