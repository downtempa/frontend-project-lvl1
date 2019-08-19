import readlineSync from 'readline-sync';

const showDescription = () => console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
const getName = () => readlineSync.question('May I have your name? ');
const sayHello = (name) => console.log(`Hello, ${name}!\n`);
const showQuestion = (number) => console.log(`Question: ${number}`);
const showResultMessage = (resultObj, name) => {
  if (resultObj.result) {
    console.log('Correct!');
  } else {
    console.log(`'${resultObj.answer}' is wrong answer ;(. Correct answer was '${resultObj.correctAnswer}'.\nLet's try again, ${name}!`);
  }
};

const isEven = (number) => number % 2 === 0;

const isCorrectAnswer = (number, answer) => {
  const result = (isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no');
  return {
    result,
    answer,
    correctAnswer: isEven(number) ? 'yes' : 'no',
  };
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const showCongratulations = (name) => console.log(`Congratulations, ${name}!`);

const defaultOptions = {
  minIntVal: 1,
  maxIntVal: 100,
  playTimes: 3,
};

export default () => {
  const { minIntVal, maxIntVal, playTimes } = defaultOptions;

  showDescription();
  const userName = getName();
  sayHello(userName);

  const play = (attempt) => {
    if (attempt < 1) {
      showCongratulations(userName);
      return true;
    }

    const number = getRandomInt(minIntVal, maxIntVal);
    showQuestion(number);
    const answer = readlineSync.question('Your answer: ');
    const resultObj = isCorrectAnswer(number, answer);
    showResultMessage(resultObj, userName);
    if (resultObj.result) {
      return play(attempt - 1);
    }

    return false;
  };

  return play(playTimes);
};
