import {MatchResult} from './enums/MatchResult';
import {MatchReader} from './classes/MatchReader';

const reader = new MatchReader('./resources/football.csv');
reader.read();

let manUtdWins = 0;

function isAwayWin(record: string[]) {
    return MatchResult.AwayWin === record[5];
}

function isHomeWin(record: string[]) {
    return MatchResult.HomeWin === record[5];
}

for (let record of reader.data){
    const MANCHESTER_UTD = 'Man United';

    if (MANCHESTER_UTD === record[1] && isHomeWin(record) || MANCHESTER_UTD === record[2] && isAwayWin(record)) {
        manUtdWins++;
    }
}

console.log(`Manchester United won ${manUtdWins} matches`);