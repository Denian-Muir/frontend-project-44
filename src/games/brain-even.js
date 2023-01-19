#!/usr/bin/env node
import Game from '../index.js';
import randomNumber from '../randomNumber.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const number = (num) => num % 2 === 0;
const questionandAnswer = () => {
  const question = randomNumber();
  const answer = number(question) ? 'yes' : 'no';
  return [question, answer];
};
const GameEven = () => {
  Game(rules, questionandAnswer);
};
export default GameEven;
