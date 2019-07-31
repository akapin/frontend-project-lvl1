import { playGame, getRandomInteger } from '..';

const gameDescription = 'What is the result of the expression?';

const getMathExpressionString = (minNumber, maxNumber) => {
  const a = getRandomInteger(minNumber, maxNumber);
  const b = getRandomInteger(minNumber, maxNumber);
  const symbolMap = '+-*';
  const startIndex = 0;
  const operator = symbolMap.charAt(getRandomInteger(startIndex, symbolMap.length));
  return `${a} ${operator} ${b}`;
};

const getExpressionResult = (expression) => {
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
  const expressionMinNumber = 0;
  const expressionMaxNumber = 100;
  const expressionString = getMathExpressionString(expressionMinNumber, expressionMaxNumber);
  const expressionResult = getExpressionResult(expressionString);
  return { question: expressionString, correctAnswer: expressionResult };
};

export default () => playGame(gameDescription, getQuestionAnswerPair);
