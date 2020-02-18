import {MatchReader} from './classes/MatchReader';
import {WinsAnalysis} from './classes/analyzers/WinsAnalysis';
import {Summary} from './classes/Summary';
import {ConsoleReport} from './classes/reporters/ConsoleReport';
import {AverageGoalsAnalysis} from './classes/analyzers/AverageGoalsAnalysis';
import {HtmlReport} from './classes/reporters/HtmlReport';

// create an object that satisfies the DataReader interface
// create a MatchReader and pass the object satisfying DataReader
const matchReader = MatchReader.fromCsv('./resources/football.csv');
matchReader.load();
const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
const averages = new Summary(new AverageGoalsAnalysis(), new HtmlReport('build/averages.html'));
averages.buildAndPrintReport(matchReader.matches);
const winsWithHtmlReport = Summary.winsAnalysisWithHtmlreport('Fulham', 'build/wins.html');
winsWithHtmlReport.buildAndPrintReport(matchReader.matches);
