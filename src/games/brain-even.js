import * as print from '../print';
import * as util from '../util';

const description = 'Answer "yes" if number even otherwise answer "no"';

const showDescription = () => print.showDescription(description);

const question = util.getRandomInt(1, 100);

const showQuestion = () => print.showQuestion(question);

export {
  showDescription,
  showQuestion,
};
