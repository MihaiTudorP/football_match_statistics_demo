import fs from 'fs';

const matches = fs.readFileSync('./resources/football.csv', {encoding: 'utf-8'}).split('\n').map((record)=>{
    return record.split(',');
});
console.log(matches);