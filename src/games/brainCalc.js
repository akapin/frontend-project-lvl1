import { playGame, getRandomInteger } from '..';

const gameDescription = 'What is the result of the expression?';

const getMathExpressionString = (minNumber, maxNumber) => {
  const firstOperand = getRandomInteger(minNumber, maxNumber);
  const secondOperand = getRandomInteger(minNumber, maxNumber);
  const symbolMap = '+-*';
  const startIndex = 0;
  const randomIndex = getRandomInteger(startIndex, symbolMap.length);
  const operator = symbolMap.charAt(randomIndex);
  return `${firstOperand} ${operator} ${secondOperand}`;
};

const getExpressionResult = (expression) => {
  const expressionArray = expression.split(' ');
  const firstOperand = Number(expressionArray[0]);
  const secondOperand = Number(expressionArray[2]);
  const operator = expressionArray[1];
  let result;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
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
