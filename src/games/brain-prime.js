#!/usr/bin/env node
import Game from '../index.js';
import randomNumber from '../randomNumber.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const Prime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
const questionandAnswer = () => {
  const question = randomNumber();
  const answer = Prime(question) ? 'yes' : 'no';
  return [question, answer];
};
const GamePrime = () => {
  Game(rules, questionandAnswer);
};
export default GamePrime;
