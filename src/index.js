import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min) + min);

const isEven = num => num % 2 === 0;

const playGame = (userName) => {
  const iter = (counter) => {
    const num = getRandomInteger(0, 100);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    const correctAnswerCount = counter + 1;
    if (correctAnswerCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    iter(correctAnswerCount);
  };
  iter(0);
};

const startGame = () => {
  const userName = greeting();
  playGame(userName);
};

export { greeting, startGame };
