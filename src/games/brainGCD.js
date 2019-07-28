import { playGame, getRandomInteger } from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const min = 0;
  const max = 100;
  const a = getRandomInteger(min, max);
  const b = getRandomInteger(min, max);
  return `${a} ${b}`;
};

const gcd = (a, b) => {
  if (!b) return a;
  return gcd(b, a % b);
};

const getCorrectAnswer = (question) => {
  const expressionArray = question.split(' ');
  const a = Number(expressionArray[0]);
  const b = Number(expressionArray[1]);
  return String(gcd(a, b));
};

export default () => playGame(gameDescription, getQuestion, getCorrectAnswer);
