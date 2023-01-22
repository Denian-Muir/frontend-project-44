#!/usr/bin/env node
import Game from '../index.js';
import randomNumber from '../randomNumber.js';

const rules = 'What is the result of the expression?';
const symvol = ['+', '-', '*'];
const CorrectAnswer = (number1, number2, randomsymvol) => {
  let answer = 0;
  if (symvol[0] === randomsymvol) {
    answer = number1 + number2;
  } else if (symvol[1] === randomsymvol) {
    answer = number1 - number2;
  } else {
    answer = number1 * number2;
  }
  return answer;
};
const questionandAnswer = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const randomsymvol = symvol[randomNumber(0, symvol.length)];
  const question = `${number1} ${randomsymvol} ${number2}`;
  const answer = CorrectAnswer(number1, number2, randomsymvol);
  return [question, String(answer)];
};
const gameCalc = () => {
  Game(rules, questionandAnswer);
};
export default gameCalc;
// brain-calc

// Welcome to the Brain Games!
// May I have your name? Sam
// Hello, Sam!
// What is the result of the expression?
// Question: 4 + 10
// Your answer: 14
// Correct!
// Question: 25 - 11
// Your answer: 14
// Correct!
// Question: 25 * 7
// Your answer: 175
// Correct!
// Congratulations, Sam!