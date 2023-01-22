#!/usr/bin/env node
import Game from '../index.js';
import randomNumber from '../randomNumber.js';

const lengthProgression = 10;
const maxDiffProgression = 10;
const rule = 'What number is missing in the progression?';
const questionandAnswer = () => {
  const firstNum = randomNumber();
  const diffProgression = randomNumber(1, maxDiffProgression);
  const skip = randomNumber(0, lengthProgression);
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(firstNum + diffProgression * i);
  }
  const answer = progression[skip];
  progression[skip] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};
const initGameProgression = () => {
  Game(rule, questionandAnswer);
};
export default initGameProgression;
