import { Analyzer } from '../Summary';
import { MatchRow } from '../../MatchRow';

export class AverageGoalsAnalysis implements Analyzer {
    run(matches: MatchRow[]): string {
        const goals: number[] = matches.map(match => {
            return match[3] + match[4];
        });
        return `The average goals per match is: ${AverageGoalsAnalysis.computeAverage(goals)}`;
    }

    private static computeAverage(goals: number[]) {
        let sum = 0;
        for (let goal of goals) {
            sum = sum + goal;
        }
        return Math.floor(sum / goals.length);
    }
}
