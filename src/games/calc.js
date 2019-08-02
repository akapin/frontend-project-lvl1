import { playGame, getRandomInteger } from '..';

const gameDescription = 'What is the result of the expression?';

const symbolMap = '+-*';
const startIndex = 0;
const minNumber = 0;
const maxNumber = 100;

const getQuestionAnswerPair = () => {
  const firstOperand = getRandomInteger(minNumber, maxNumber);
  const secondOperand = getRandomInteger(minNumber, maxNumber);
  const randomIndex = getRandomInteger(startIndex, symbolMap.length);
  const operator = symbolMap.charAt(randomIndex);
  const expressionString = `${firstOperand} ${operator} ${secondOperand}`;

  let expressionResult;

  switch (operator) {
    case '+':
      expressionResult = firstOperand + secondOperand;
      break;
    case '-':
      expressionResult = firstOperand - secondOperand;
      break;
    case '*':
      expressionResult = firstOperand * secondOperand;
      break;
    default:
      break;
  }

  return { question: expressionString, correctAnswer: String(expressionResult) };
};

export default () => playGame(gameDescription, getQuestionAnswerPair);
