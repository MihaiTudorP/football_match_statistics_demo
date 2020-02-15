import {MatchResult} from './enums/MatchResult';
import {MatchReader} from './classes/MatchReader';

const reader = new MatchReader('./resources/football.csv');
reader.read();

let manUtdWins = 0;

for (let record of reader.data){
    const MANCHESTER_UTD = 'Man United';

    if (MANCHESTER_UTD === record[1] && MatchResult.HomeWin === record[5] || MANCHESTER_UTD === record[2] && MatchResult.AwayWin === record[5]) {
        manUtdWins++;
    }
}

console.log(`Manchester United won ${manUtdWins} matches`);