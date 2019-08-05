import playGame from '..';
import getRandomInteger from '../utils';

const gameDescription = 'What number is missing in the progression?';

const numberOfSteps = 10;
const minStartNumber = 0;
const maxStartNumber = 10;
const minProgressionStep = 1;
const maxProgressionStep = 10;
const minHiddenItemIndex = 0;

const getProgressionString = (startNumber, progressionStep, hiddenItemIndex) => {
  let progressionString = '';
  let currentNumber = startNumber;
  for (let i = 0; i < numberOfSteps; i += 1) {
    if (i !== hiddenItemIndex) {
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
  const progressionStep = getRandomInteger(minProgressionStep, maxProgressionStep);
  const hiddenItemIndex = getRandomInteger(minHiddenItemIndex, numberOfSteps);
  const question = getProgressionString(startNumber, progressionStep, hiddenItemIndex);
  const correctAnswer = String(startNumber + progressionStep * hiddenItemIndex);
  return { question, correctAnswer };
};

export default () => playGame(gameDescription, getQuestionAnswerPair);
