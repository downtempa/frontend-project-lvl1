import * as print from '../print';
import * as util from '../util';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const showDescription = () => print.showDescription(description);

const rangestartValue = 1;
const rangeEndValue = 100;

const showQuestion = () => {
  const question = util.getRandomInt(rangestartValue, rangeEndValue);
  print.showQuestion(question);
  return question;
};

const getCorrectAnswer = (gameQuestion) => (util.isPrime(gameQuestion) ? 'yes' : 'no');

const checkAnswer = (question, answer) => (util.isPrime(question) && answer === 'yes') || (!util.isPrime(question) && answer === 'no');

const getResult = (gameQuestion, userAnswer, name) => {
  const isCorrectAnswer = checkAnswer(gameQuestion, userAnswer);
  return {
    name,
    isCorrectAnswer,
    userAnswer,
    correctAnswer: getCorrectAnswer(gameQuestion),
  };
};

const showAnswer = (resultObj) => print.showResultMessage(resultObj);

export {
  showDescription,
  showQuestion,
  getResult,
  showAnswer,
};
