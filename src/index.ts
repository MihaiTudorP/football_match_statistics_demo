import fs from 'fs';

const text = fs.readFileSync('./resources/football.csv');
console.log(text);