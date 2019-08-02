import { playGame, getRandomInteger } from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrimeNumber = (number) => {
  if (number === 1) return 'no';
  if (number === 2) return 'yes';
  const startDivisor = 2;
  for (let divisor = startDivisor; divisor < number; divisor += 1) {
    if (number % divisor === 0) return 'no';
  }
  return 'yes';
};

const getQuestionAnswerPair = () => {
  const minNumber = 1;
  const maxNumber = 1000;
  const randomInteger = getRandomInteger(minNumber, maxNumber);
  const correctAnswer = isPrimeNumber(randomInteger);
  return { question: randomInteger, correctAnswer };
};

export default () => playGame(gameDescription, getQuestionAnswerPair);
