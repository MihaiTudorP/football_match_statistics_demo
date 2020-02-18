import { MatchRow } from '../MatchRow';
import {WinsAnalysis} from './analyzers/WinsAnalysis';
import {HtmlReport} from './reporters/HtmlReport';

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

    static winsAnalysisWithHtmlreport(team: string, fileName: string){
        return new Summary(new WinsAnalysis(team), new HtmlReport(fileName));
    }
}
