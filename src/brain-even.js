import readlineSync from 'readline-sync';

const showDescription = () => console.log('Welcome to the Brain Games!\n Answer "yes" if number even otherwise answer "no".');
const getName = () => readlineSync.question('May I have your name? ');
const sayHello = (name) => console.log(`Hello, ${name}!`);
const showResultMess = (result, name) => {
  return result ? 'Correct!' : `'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`
};

const isEven = (number) => number % 2 === 0;
const isCorrectAnswer = (number, answer) => {
  return isEven(number) && answer === 'yes' || !isEven(number) && answer === 'no';
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const defaultOptions = {
  minIntVal: 1,
  maxIntVal: 100,
  playTimes: 3
};

export default (options) => {
  const minIntVal = options.minIntVal || defaultOptions.minIntVal;
  const maxIntVal = options.maxIntVal || defaultOptions.maxIntVal;
  const playTimes = options.playTimes || defaultOptions.playTimes;

  showDescription();
  const userName = getName();
  sayHello();

  const engine = () => {
    const number = getRandomInt(minIntVal, maxIntVal);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const result = isCorrectAnswer(number, answer);
    showResultMess(result);
    
  }

  engine(playTimes);
};
