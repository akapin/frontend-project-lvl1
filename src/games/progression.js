import { playGame, getRandomInteger } from '..';

const gameDescription = 'What number is missing in the progression?';

const numberOfSteps = 10;
const minStartNumber = 0;
const maxStartNumber = 10;
const minProgressionStep = 1;
const maxProgressionStep = 10;
const minHiddenItemPosition = 1;
const maxHiddenItemPosition = 10;

const getProgressionString = (startNumber, progressionStep, hiddenItemPosition) => {
  let progressionString = '';
  let currentNumber = startNumber;
  for (let i = 1; i <= numberOfSteps; i += 1) {
    if (i !== hiddenItemPosition) {
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
  const hiddenItemPosition = getRandomInteger(minHiddenItemPosition, maxHiddenItemPosition);
  const question = getProgressionString(startNumber, progressionStep, hiddenItemPosition);
  const correctAnswer = String(startNumber + progressionStep * (hiddenItemPosition - 1));
  return { question, correctAnswer };
};

export default () => playGame(gameDescription, getQuestionAnswerPair);
