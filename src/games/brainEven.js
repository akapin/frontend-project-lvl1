import { playGame, getRandomInteger } from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const getQuestion = () => {
  const min = 0;
  const max = 100;
  return getRandomInteger(min, max);
};

const isEven = num => num % 2 === 0;

const getCorrectAnswer = (question) => {
  if (isEven(question)) {
    return 'yes';
  }
  return 'no';
};

export default () => playGame(gameDescription, getQuestion, getCorrectAnswer);
