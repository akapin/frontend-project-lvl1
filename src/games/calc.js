import { playGame } from '..';
import getRandomInteger from '../utils';

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
  const question = `${firstOperand} ${operator} ${secondOperand}`;

  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = String(firstOperand + secondOperand);
      break;
    case '-':
      correctAnswer = String(firstOperand - secondOperand);
      break;
    case '*':
      correctAnswer = String(firstOperand * secondOperand);
      break;
    default:
      break;
  }

  return { question, correctAnswer };
};

export default () => playGame(gameDescription, getQuestionAnswerPair);
