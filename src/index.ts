import { CsvFileReader } from './classes/CsvFileReader'
import { MatchResult } from './enums/MatchResult'
import { MatchReader } from './classes/MatchReader'

// create an object that satisfies the DataReader interface
// create a MatchReader and pass the object satisfying DataReader
const reader = new CsvFileReader('./resources/football.csv');
const matchReader = new MatchReader(reader);
matchReader.load();

let manUtdWins = 0;

for (let record of matchReader.matches) {
    const MANCHESTER_UTD = 'Man United';

    if (
        (MANCHESTER_UTD === record[1] && MatchResult.HomeWin === record[5]) ||
        (MANCHESTER_UTD === record[2] && MatchResult.AwayWin === record[5])
    ) {
        manUtdWins++
    }
}

console.log(`Manchester United won ${manUtdWins} matches`);
