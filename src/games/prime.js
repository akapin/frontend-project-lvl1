import { playGame, getRandomInteger } from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const minNumber = 0;
const maxNumber = 100;

const isPrimeNumber = (number) => {
  const squareRootOfNumber = Math.floor(Math.sqrt(number));
  const startDivisor = 2;
  for (let divisor = startDivisor; divisor < squareRootOfNumber + 1; divisor += 1) {
    if (number % divisor === 0) return false;
  }
  return number > 1;
};

const getQuestionAnswerPair = () => {
  const question = getRandomInteger(minNumber, maxNumber);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => playGame(gameDescription, getQuestionAnswerPair);
