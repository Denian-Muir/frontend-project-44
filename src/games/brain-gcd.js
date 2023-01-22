#!/usr/bin/env node

import Game from '../index.js';
import randomNumber from '../randomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';
const getGCD = (number1, number2) => {
  const minNum = number1 > number2 ? number2 : number1;
  let gcd = 1;
  for (let i = 2; i <= minNum; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) gcd = i;
  }
  return gcd;
};
const questionandAnswer = () => {
  const number1 = randomNumber(1);
  const number2 = randomNumber(1);
  const question = `${number1} ${number2}`;
  const answer = getGCD(number1, number2);
  return [question, String(answer)];
};
const GameGCD = () => {
  Game(rules, questionandAnswer);
};
export default GameGCD;