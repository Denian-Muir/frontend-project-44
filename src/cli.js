#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};
export default greting;
