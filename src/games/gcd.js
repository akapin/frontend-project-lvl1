import { playGame, getRandomInteger } from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getTwoRandomNumbersString = (minNumber, maxNumber) => {
  const firstNumber = getRandomInteger(minNumber, maxNumber);
  const secondNumber = getRandomInteger(minNumber, maxNumber);
  return `${firstNumber} ${secondNumber}`;
};

const getGDC = (numbersString) => {
  const numbersArray = numbersString.split(' ');
  const number1 = Number(numbersArray[0]);
  const number2 = Number(numbersArray[1]);
  const iter = (a, b) => {
    if (!b) return a;
    return iter(b, a % b);
  };
  return String(iter(number1, number2));
};

const getQuestionAnswerPair = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const twoRandomNumbersString = getTwoRandomNumbersString(minNumber, maxNumber);
  const gdc = getGDC(twoRandomNumbersString);
  return { question: twoRandomNumbersString, correctAnswer: gdc };
};

export default () => playGame(gameDescription, getQuestionAnswerPair);
