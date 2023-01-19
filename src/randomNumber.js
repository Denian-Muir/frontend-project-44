#!/usr/bin/env node
const max = 100;
const min = 0;

const randomNumber = (minNum = min, maxNum = max) => Math.floor(Math.random() * maxNum) + minNum;

export default randomNumber;
