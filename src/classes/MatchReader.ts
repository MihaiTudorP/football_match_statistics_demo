import {CsvFileReader} from './CsvFileReader';
import {datesStringToDate} from '../utils';
import {MatchResult} from '../enums/MatchResult';

export type MatchRow = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchRow>{
    mapRow(row: string[]): MatchRow {
        return [
            datesStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
        ];
    }
}