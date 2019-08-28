import * as print from '../print';
import * as util from '../util';

const description = 'Answer "yes" if number even, otherwise answer "no"';

const showDescription = () => print.showDescription(description);

const showQuestion = () => {
  const question = util.getRandomInt(1, 100);
  print.showQuestion(question);
  return question;
};

const getCorrectAnswer = (gameQuestion) => (util.isEven(gameQuestion) ? 'yes' : 'no');

const checkAnswer = (question, answer) => (util.isEven(question) && answer === 'yes') || (!util.isEven(question) && answer === 'no');

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
