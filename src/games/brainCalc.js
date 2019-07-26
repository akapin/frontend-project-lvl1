import { playGame, getRandomInteger } from '..';

const gameDescription = 'What is the result of the expression?';

const getQuestion = () => {
  const min = 0;
  const max = 100;
  const a = getRandomInteger(min, max);
  const b = getRandomInteger(min, max);
  const symbolMap = '+-*';
  const operator = symbolMap.charAt(getRandomInteger(0, 3));
  return `${a} ${operator} ${b}`;
};

const getCorrectAnswer = (question) => {
  const expressionArray = question.split(' ');
  const a = expressionArray[0];
  const b = expressionArray[2];
  const operator = expressionArray[1];
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      break;
  }
  return String(result);
};

export default () => playGame(gameDescription, getQuestion, getCorrectAnswer);
