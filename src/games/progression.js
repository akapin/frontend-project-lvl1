import { playGame, getRandomInteger } from '..';

const gameDescription = 'What number is missing in the progression?';

const steps = 10;
const minStartNumber = 0;
const maxStartNumber = 10;
const minStep = 1;
const maxStep = 10;
const minSkipStep = 1;
const maxSkipStep = 10;

const getProgressionString = (startNumber, progressionStep, hiddenElement) => {
  let progressionString = '';
  let currentNumber = startNumber;
  for (let i = 1; i <= steps; i += 1) {
    if (i !== hiddenElement) {
      progressionString = `${progressionString}${currentNumber} `;
    } else {
      progressionString = `${progressionString}.. `;
    }
    currentNumber += progressionStep;
  }
  return progressionString.trim();
};

const getQuestionAnswerPair = () => {
  const startNumber = getRandomInteger(minStartNumber, maxStartNumber);
  const progressionStep = getRandomInteger(minStep, maxStep);
  const hiddenElement = getRandomInteger(minSkipStep, maxSkipStep);
  const question = getProgressionString(startNumber, progressionStep, hiddenElement);
  const correctAnswer = String(startNumber + progressionStep * (hiddenElement - 1));
  return { question, correctAnswer };
};

export default () => playGame(gameDescription, getQuestionAnswerPair);
