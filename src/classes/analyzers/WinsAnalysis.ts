import { Analyzer } from '../Summary';
import { MatchRow } from '../../MatchRow';
import { MatchResult } from '../../enums/MatchResult';

export class WinsAnalysis implements Analyzer {
    constructor(public team: string) {}

    run(matches: MatchRow[]): string {
        let wins = 0;

        for (let record of matches) {
            if (
                (this.team === record[1] && MatchResult.HomeWin === record[5]) ||
                (this.team === record[2] && MatchResult.AwayWin === record[5])
            ) {
                wins++;
            }
        }

        return `Team ${this.team} won ${wins} matches`;
    }
}
