import * as brainEven from './games/brain-even';
import * as brainCalc from './games/brain-calc';
import * as brainGCD from './games/brain-gcd';
import * as brainProgression from './games/brain-progression';
import * as brainPrime from './games/brain-prime';
import * as print from './print';

const playTimes = 3;

const gameHandlers = {
  'brain-even': brainEven,
  'brain-calc': brainCalc,
  'brain-gcd': brainGCD,
  'brain-progression': brainProgression,
  'brain-prime': brainPrime,
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
