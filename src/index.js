import readlineSync from 'readline-sync';

export const greetUser = () => console.log('Welcome to the Brain Games!');

export const getUserName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const playGame = (gameDescription, getQuestionAnswerPair) => {
  const numberOfGameRounds = 3;
  const initialNumberOfCorrectAnswers = 0;
  greetUser();
  console.log(gameDescription);
  const userName = getUserName();
  if (!getQuestionAnswerPair) return;

  const iter = (acc) => {
    let correctAnswersCount = acc;
    const { question, correctAnswer } = getQuestionAnswerPair();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    correctAnswersCount += 1;
    if (correctAnswersCount === numberOfGameRounds) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    iter(correctAnswersCount);
  };
  iter(initialNumberOfCorrectAnswers);
};
