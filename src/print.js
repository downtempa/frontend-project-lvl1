import readlineSync from 'readline-sync';

const showDescription = (description) => console.log(`Welcome to the Brain Games!\n${description}\n`);

const getName = () => readlineSync.question('May I have your name? ');

const sayHello = (name) => console.log(`Hello, ${name}!\n`);

const showQuestion = (question) => console.log(`Question: ${question}`);

const getAnswer = () => readlineSync.question('Your answer: ');

const showResultMessage = (resultObj) => {
  if (resultObj.isCorrectAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${resultObj.userAnswer}' is wrong answer ;(. Correct answer was '${resultObj.correctAnswer}'.\nLet's try again, ${resultObj.name}!`);
  }
};

const showCongratulations = (name) => console.log(`Congratulations, ${name}!`);

export {
  showDescription,
  getName,
  sayHello,
  showQuestion,
  getAnswer,
  showResultMessage,
  showCongratulations,
};
