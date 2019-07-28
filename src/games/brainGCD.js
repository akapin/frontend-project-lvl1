import { playGame, getRandomInteger } from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getTwoRandomNumbersString = (minNumber, maxNumber) => {
  const a = getRandomInteger(minNumber, maxNumber);
  const b = getRandomInteger(minNumber, maxNumber);
  return `${a} ${b}`;
};

const getGDC = (numbersString) => {
  const numbersArray = numbersString.split(' ');
  const num1 = Number(numbersArray[0]);
  const num2 = Number(numbersArray[1]);
  const iter = (a, b) => {
    if (!b) return a;
    return iter(b, a % b);
  };
  return String(iter(num1, num2));
};

const getQuestionAnswerPair = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const question = getTwoRandomNumbersString(minNumber, maxNumber);
  const correctAnswer = getGDC(question);
  return { question, correctAnswer };
};

export default () => playGame(gameDescription, getQuestionAnswerPair);
