import readlineSync from 'readline-sync';
import { greeting, showGameDescription, getUserName } from '..';

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isEven = num => num % 2 === 0;

const playGame = (userName) => {
  const iter = (counter) => {
    const num = getRandomInteger(0, 100);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    const correctAnswerCount = counter + 1;
    if (correctAnswerCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    iter(correctAnswerCount);
  };
  iter(0);
};

export default () => {
  greeting();
  showGameDescription('Answer "yes" if number even otherwise answer "no".');
  const userName = getUserName();
  playGame(userName);
};
