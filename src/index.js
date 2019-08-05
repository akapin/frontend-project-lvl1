import readlineSync from 'readline-sync';

export const showWelcomePrompt = () => console.log('Welcome to the Brain Games!');

export const getUserName = () => readlineSync.question('\nMay I have your name? ');

export const greetUser = userName => console.log(`Hello, ${userName}!\n`);

export const playGame = (gameDescription, getQuestionAnswerPair) => {
  const numberOfGameRounds = 3;
  const initialNumberOfCorrectAnswers = 0;
  showWelcomePrompt();
  console.log(gameDescription);
  const userName = getUserName();
  greetUser(userName);

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
