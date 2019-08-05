import readlineSync from 'readline-sync';

const numberOfGameRounds = 3;
const initialNumberOfCorrectAnswers = 0;

export default (gameDescription, getQuestionAnswerPair) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (acc) => {
    let correctAnswersCount = acc;
    const { question, correctAnswer } = getQuestionAnswerPair();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
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
