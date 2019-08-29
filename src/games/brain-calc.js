import * as print from '../print';
import * as util from '../util';

const description = 'What is the result of the expression?';

const showDescription = () => print.showDescription(description);

const rangestartValue = 1;
const rangeEndValue = 100;

const showQuestion = () => {
  const operation = util.getRandomOperation(util.operationsArr);
  const operationSymbol = util.operationsMap[operation].symbol;

  const a = util.getRandomInt(rangestartValue, rangeEndValue);
  const b = util.getRandomInt(rangestartValue, rangeEndValue);

  const questionStr = `${a} ${operationSymbol} ${b}`;
  const operationResult = util.operationsMap[operation].method(a, b);
  print.showQuestion(questionStr);
  return operationResult;
};

const getCorrectAnswer = (gameQuestion) => gameQuestion;

const checkAnswer = (question, answer) => {
  const answerNormalize = Number(answer);
  return question === answerNormalize;
};

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
