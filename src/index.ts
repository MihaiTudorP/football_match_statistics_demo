import fs from 'fs';

const matches = fs.readFileSync('./resources/football.csv', {encoding: 'utf-8'}).split('\n').map((record)=>{
    return record.split(',');
});

enum MatchResult {
    HomeWin= 'H',
    AwayWin= 'A',
    Draw= 'D'
}

let manUtdWins = 0;

function isAwayWin(record: string[]) {
    return MatchResult.AwayWin === record[5];
}

function isHomeWin(record: string[]) {
    return MatchResult.HomeWin === record[5];
}

for (let record of matches){
    const MANCHESTER_UTD = 'Man United';

    if (MANCHESTER_UTD === record[1] && isHomeWin(record) || MANCHESTER_UTD === record[2] && isAwayWin(record)) {
        manUtdWins++;
    }
}

console.log(`Manchester United won ${manUtdWins} matches`);