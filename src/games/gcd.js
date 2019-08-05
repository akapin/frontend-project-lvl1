import playGame from '..';
import getRandomInteger from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const minNumber = 0;
const maxNumber = 100;

const getGCD = (a, b) => {
  if (!b) return a;
  return getGCD(b, a % b);
};

const getQuestionAnswerPair = () => {
  const firstNumber = getRandomInteger(minNumber, maxNumber);
  const secondNumber = getRandomInteger(minNumber, maxNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getGCD(firstNumber, secondNumber));
  return { question, correctAnswer };
};

export default () => playGame(gameDescription, getQuestionAnswerPair);
