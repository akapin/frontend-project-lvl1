import { playGame, getRandomInteger } from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const minNumber = 0;
const maxNumber = 100;

const getQuestionAnswerPair = () => {
  const question = getRandomInteger(minNumber, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => playGame(gameDescription, getQuestionAnswerPair);
