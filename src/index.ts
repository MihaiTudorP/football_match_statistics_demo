import {CsvFileReader} from './classes/CsvFileReader'
import {MatchReader} from './classes/MatchReader'
import {WinsAnalysis} from './classes/analyzers/WinsAnalysis';
import {Summary} from './classes/Summary';
import {ConsoleReport} from './classes/reporters/ConsoleReport';

// create an object that satisfies the DataReader interface
// create a MatchReader and pass the object satisfying DataReader
const reader = new CsvFileReader('./resources/football.csv');
const matchReader = new MatchReader(reader);
matchReader.load();
const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);