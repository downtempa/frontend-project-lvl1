import * as print from '../print';
import * as util from '../util';

const description = 'What number is missing in the progression?';

const showDescription = () => print.showDescription(description);

const rangestartValue = 1;
const rangeEndValue = 50;

const showQuestion = () => {
  const transformer = util.getRandomOperation(util.transformersArr);
  const transformerFunc = util.transformersMap[transformer];

  const a = util.getRandomInt(rangestartValue, rangeEndValue);

  const makeProgression = util.makeProgression(transformerFunc);
  const progression = makeProgression(a);
  const randomIndex = util.getRandomInt(0, util.progressionLength - 1);
  const randomItem = progression[randomIndex];
  const progressionMask = progression.slice();
  progressionMask[randomIndex] = '..';

  const questionStr = progressionMask.join(' ');

  print.showQuestion(questionStr);
  return randomItem;
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
