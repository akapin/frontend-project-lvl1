import { playGame, getRandomInteger } from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getQuestionAnswerPair = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const randomInteger = getRandomInteger(minNumber, maxNumber);
  const correctAnswer = isEven(randomInteger) ? 'yes' : 'no';
  return { question: randomInteger, correctAnswer };
};

export default () => playGame(gameDescription, getQuestionAnswerPair);
