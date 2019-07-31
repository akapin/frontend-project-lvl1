import readlineSync from 'readline-sync';

export const greeting = () => console.log('Welcome to the Brain Games!');

export const getUserName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const playGame = (gameDescription, getQuestionAnswerPair) => {
  const gameRounds = 3;
  const correctAnswersCount = 0;
  greeting();
  if (gameDescription) console.log(gameDescription);
  const userName = getUserName();

  const iter = (acc) => {
    const { question, correctAnswer } = getQuestionAnswerPair();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    const correctAnswersCounter = acc + 1;
    if (correctAnswersCounter === gameRounds) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      iter(correctAnswersCounter);
    }
  };
  if (getQuestionAnswerPair) iter(correctAnswersCount);
};
