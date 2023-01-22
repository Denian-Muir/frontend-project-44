#!/usr/bin/env node
import readlineSync from 'readline-sync';

const round = 3;
const Game = (rules, questionandAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  let correctAnswersCount = 0;
  while (correctAnswersCount < round) {
    const [question, CorrectAnswer] = questionandAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (CorrectAnswer === userAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${CorrectAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default Game;
