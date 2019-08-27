import * as brainEven from './games/brain-even';
import * as brainCalc from './games/brain-calc';
import * as print from './print';

const playTimes = 3;

const gameHandlers = {
  'brain-even': brainEven,
  'brain-calc': brainCalc,
};

const getGame = (gameName) => gameHandlers[gameName];

export default (gameName) => {
  const game = getGame(gameName);
  game.showDescription();
  const userName = print.getName();
  print.sayHello(userName);

  const player = (attempt) => {
    if (attempt < 1) {
      print.showCongratulations(userName);
      return true;
    }

    const question = game.showQuestion();
    const answer = print.getAnswer();
    const result = game.getResult(question, answer, userName);
    game.showAnswer(result);

    if (result.isCorrectAnswer) {
      return player(attempt - 1);
    }

    return false;
  };

  return player(playTimes);
};
