import { playGame, getRandomInteger } from '..';

const gameDescription = 'What is the result of the expression?';

const getMathExpressionString = (minNumber, maxNumber) => {
  const a = getRandomInteger(minNumber, maxNumber);
  const b = getRandomInteger(minNumber, maxNumber);
  const symbolMap = '+-*';
  const operator = symbolMap.charAt(getRandomInteger(0, 3));
  return `${a} ${operator} ${b}`;
};

const getCorrectAnswer = (expression) => {
  const expressionArray = expression.split(' ');
  const a = Number(expressionArray[0]);
  const b = Number(expressionArray[2]);
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

const getQuestionAnswerPair = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const question = getMathExpressionString(minNumber, maxNumber);
  const correctAnswer = getCorrectAnswer(question);
  return { question, correctAnswer };
};

export default () => playGame(gameDescription, getQuestionAnswerPair);
