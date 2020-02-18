import { MatchRow } from '../MatchRow';

export interface Analyzer {
    run(matches: MatchRow[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
    buildAndPrintReport(matchData: MatchRow[]): void {
        const report = this.analyzer.run(matchData);
        this.outputTarget.print(report);
    }
}
