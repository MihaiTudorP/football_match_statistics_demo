import fs from 'fs';

const matches = fs.readFileSync('./resources/football.csv', {encoding: 'utf-8'}).split('\n').map((record)=>{
    return record.split(',');
});

let manUtdWins = 0;
for (let record of matches){
    const MANCHESTER_UTD = 'Man United';
    if (MANCHESTER_UTD === record[1] && 'H' === record[5] || MANCHESTER_UTD === record[2] && 'A' === record[5]) {
        manUtdWins++;
        console.log(record);
    }
}

console.log(`Manchester United won ${manUtdWins} matches`);