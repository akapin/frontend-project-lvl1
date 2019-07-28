import { playGame, getRandomInteger } from '..';

const gameDescription = 'What number is missing in the progression?';

const getProgressionString = (steps, startNumber, progressionStep, hiddenElement) => {
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

const getMissingNumber = (startNum, step, hiddenElement) => startNum + step * (hiddenElement - 1);

const getQuestionAnswerPair = () => {
  const steps = 10;
  const minStartNumber = 0;
  const maxStartNumber = 10;
  const startNumber = getRandomInteger(minStartNumber, maxStartNumber);
  const minStep = 1;
  const maxStep = 10;
  const step = getRandomInteger(minStep, maxStep);
  const minSkipStep = 1;
  const maxSkipStep = 10;
  const hiddenElement = getRandomInteger(minSkipStep, maxSkipStep);
  const question = getProgressionString(steps, startNumber, step, hiddenElement);
  const correctAnswer = String(getMissingNumber(startNumber, step, hiddenElement));
  return { question, correctAnswer };
};

export default () => playGame(gameDescription, getQuestionAnswerPair);
