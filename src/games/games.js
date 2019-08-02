import { showWelcomePrompt, getUserName, greetUser } from '..';

export default () => {
  showWelcomePrompt();
  const userName = getUserName();
  greetUser(userName);
};
