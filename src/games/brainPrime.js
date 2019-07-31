import { playGame, getRandomInteger } from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrimeNumber = (n) => {
  if (n === 1) return 'no';
  if (n === 2) return 'yes';
  for (let x = 2; x < n; x += 1) {
    if (n % x === 0) return 'no';
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
