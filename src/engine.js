import * as brainEven from './games/brain-even';
import * as brainCalc from './games/brain-calc';
import * as print from './print';

const playTimes = 3;

const gameHandlers = {
  'brain-even': brainEven,
  'brain-calc': brainCalc,
};

export default (gameName) => {
  const game = gameHandlers[gameName];
  game.showDescription();
  const userName = print.getName();
  print.sayHello(userName);

  const player = (attempt) => {
    if (attempt < 1) {
      print.showCongratulations(userName);
      return true;
    }

    game.showQuestion();
    const answer = print.getAnswer();
    const result = game.checkAnswer(game.question, answer);
    game.showAnswer(result);

    if (result) {
      return player(attempt - 1);
    }

    return false;
  };

  return player(playTimes);
};
